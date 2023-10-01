// Lifted from https://raw.githubusercontent.com/denoland/deno_graph/89affe43c9d3d5c9165c8089687c107d53ed8fe1/lib/media_type.ts
import * as dntShim from "../../_dnt.shims.ts";

export type MediaType =
  | "JavaScript"
  | "Mjs"
  | "Cjs"
  | "JSX"
  | "TypeScript"
  | "Mts"
  | "Cts"
  | "Dts"
  | "Dmts"
  | "Dcts"
  | "TSX"
  | "Json"
  | "Wasm"
  | "TsBuildInfo"
  | "SourceMap"
  | "Unknown";

interface InfoOutput {
  roots: string[];
  modules: ModuleEntry[];
  redirects: Record<string, string>;
  npmPackages: Record<string, NpmPackage>;
}

export type ModuleEntry =
  | ModuleEntryError
  | ModuleEntryEsm
  | ModuleEntryJson
  | ModuleEntryNpm
  | ModuleEntryNode;

export interface ModuleEntryBase {
  specifier: string;
}

export interface ModuleEntryError extends ModuleEntryBase {
  error: string;
}

export interface ModuleEntryEsm extends ModuleEntryBase {
  kind: "esm";
  local: string | null;
  emit: string | null;
  map: string | null;
  mediaType: MediaType;
  size: number;
}

export interface ModuleEntryJson extends ModuleEntryBase {
  kind: "asserted" | "json";
  local: string | null;
  mediaType: MediaType;
  size: number;
}

export interface ModuleEntryNpm extends ModuleEntryBase {
  kind: "npm";
  npmPackage: string;
}

export interface ModuleEntryNode extends ModuleEntryBase {
  kind: "node";
  moduleName: string;
}

export interface NpmPackage {
  name: string;
  version: string;
  dependencies: string[];
}

export interface InfoOptions {
  cwd?: string;
  config?: string;
  importMap?: string;
  lock?: string;
  nodeModulesDir?: boolean;
}

let tmpDir: string | undefined;

async function info(
  specifier: string,
  options: InfoOptions,
): Promise<InfoOutput> {
  const opts = {
    args: ["info", "--json"],
    cwd: undefined as string | undefined,
    env: { DENO_NO_PACKAGE_JSON: "true" } as Record<string, string>,
    stdout: "piped",
    stderr: "inherit",
  };
  if (typeof options.config === "string") {
    opts.args.push("--config", options.config);
  } else {
    opts.args.push("--no-config");
  }
  if (options.importMap) {
    opts.args.push("--import-map", options.importMap);
  }
  // TODO: enable when https://github.com/denoland/deno/issues/18159 is fixed
  // if (typeof options.lock === "string") {
  //   opts.args.push("--lock", options.lock);
  // } else if (!options.cwd) {
  //   opts.args.push("--no-lock");
  // }
  if (options.nodeModulesDir) {
    opts.args.push("--node-modules-dir");
  }
  if (options.cwd) {
    opts.cwd = options.cwd;
  } else {
    if (!tmpDir) tmpDir = dntShim.Deno.makeTempDirSync();
    opts.cwd = tmpDir;
  }

  opts.args.push(specifier);

  const output = await new dntShim.Deno.Command(
    dntShim.Deno.execPath(),
    opts as dntShim.Deno.CommandOptions,
  ).output();
  if (!output.success) {
    throw new Error(`Failed to call 'deno info' on '${specifier}'`);
  }
  const txt = new TextDecoder().decode(output.stdout);
  return JSON.parse(txt);
}

export class InfoCache {
  #options: InfoOptions;

  #modules: Map<string, ModuleEntry> = new Map();
  #redirects: Map<string, string> = new Map();
  #npmPackages: Map<string, NpmPackage> = new Map();

  constructor(options: InfoOptions = {}) {
    this.#options = options;
  }

  async get(specifier: string): Promise<ModuleEntry> {
    let entry = this.#getCached(specifier);
    if (entry !== undefined) return entry;

    await this.#load(specifier);

    entry = this.#getCached(specifier);
    if (entry === undefined) {
      throw new Error(`Unreachable: '${specifier}' loaded but not reachable`);
    }

    return entry;
  }

  getNpmPackage(id: string): NpmPackage | undefined {
    return this.#npmPackages.get(id);
  }

  #resolve(specifier: string): string {
    return this.#redirects.get(specifier) ?? specifier;
  }

  #getCached(specifier: string): ModuleEntry | undefined {
    specifier = this.#resolve(specifier);
    return this.#modules.get(specifier);
  }

  async #load(specifier: string): Promise<void> {
    const { modules, redirects, npmPackages } = await info(
      specifier,
      this.#options,
    );
    if (modules.length === 0 && Object.keys(redirects).length === 0) {
      this.#modules.set(specifier, {
        specifier,
        kind: "esm",
        local: specifier.replace("file://", ""),
        emit: null,
        map: null,
        mediaType: "JavaScript",
        size: 0,
      });
      return;
    }
    for (const module of modules) {
      this.#modules.set(module.specifier, module);
    }
    for (const [from, to] of Object.entries(redirects)) {
      this.#redirects.set(from, to);
    }
    for (const [id, npmPackage] of Object.entries(npmPackages)) {
      this.#npmPackages.set(id, npmPackage);
    }

    specifier = this.#resolve(specifier);
    const entry = this.#modules.get(specifier);
    if (entry === undefined && specifier.startsWith("npm:")) {
      // we hit https://github.com/denoland/deno/issues/18043, so we have to
      // perform another load to get the actual data of the redirected specifier
      await this.#load(specifier);
    }
  }
}
