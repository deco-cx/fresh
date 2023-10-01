import {
  denoPlugins,
  esbuild,
  esbuildTypes,
  esbuildWasmURL,
  fromFileUrl,
  regexpEscape,
  toFileUrl,
} from "./deps.ts";
import { getDependencies, saveSnapshot } from "./kv.ts";
import { getFile } from "./kvfs.ts";
import { Builder } from "./mod.ts";

export interface EsbuildBuilderOptions {
  /** The build ID. */
  buildID: string;
  /** The entrypoints, mapped from name to URL. */
  entrypoints: Record<string, string>;
  /** Whether or not this is a dev build. */
  dev: boolean;
  /** The path to the deno.json / deno.jsonc config file. */
  configPath: string;
  /** The JSX configuration. */
  jsxConfig: JSXConfig;
  partialOpts?: Partial<Parameters<(typeof esbuild)["build"]>[0]>;
}

export interface JSXConfig {
  jsx: "react" | "react-jsx";
  jsxImportSource?: string;
}

export class EsbuildBuilder implements Builder {
  #options: EsbuildBuilderOptions;
  #files: Map<string, Uint8Array>;
  #dependencies: Map<string, string[]> | null;
  #build: Promise<void> | null;

  constructor(options: EsbuildBuilderOptions) {
    this.#options = options;
    this.#files = new Map<string, Uint8Array>();
    this.#dependencies = null;
    this.#build = null;
  }

  async read(path: string) {
    const content = this.#files.get(path) || await getFile(path);

    if (content) return content;

    if (!this.#build) {
      this.#build = this.build();

      this.#build
        .then(() => saveSnapshot(this.#files, this.#dependencies!))
        .catch((error) => console.error(error));
    }

    await this.#build;

    return this.#files.get(path) || null;
  }

  // Lazy load dependencies from KV to avoid blocking first render
  dependencies(path: string): string[] {
    const deps = this.#dependencies?.get(path);

    if (!this.#dependencies) {
      this.#dependencies = new Map();

      getDependencies().then((d) => {
        // A build happened while we were fetching deps.
        // It will fill deps for us with a fresh deps array
        if (this.#build instanceof Promise) {
          return;
        } else if (d) {
          this.#dependencies = d;
        }
      }).catch((error) => console.error(error));
    }

    return deps ?? [];
  }

  async build(): Promise<void> {
    const start = performance.now();
    const opts = this.#options;
    try {
      await initEsbuild();

      const absWorkingDir = Deno.cwd();

      // In dev-mode we skip identifier minification to be able to show proper
      // component names in Preact DevTools instead of single characters.
      const minifyOptions: Partial<esbuildTypes.BuildOptions> = opts.dev
        ? {
          minifyIdentifiers: false,
          minifySyntax: true,
          minifyWhitespace: true,
        }
        : { minify: true };

      const bundle = await esbuild.build({
        entryPoints: opts.entrypoints,

        platform: "browser",
        target: ["chrome99", "firefox99"],

        format: "esm",
        bundle: true,
        splitting: true,
        treeShaking: true,
        sourcemap: opts.dev ? "linked" : false,
        ...minifyOptions,

        jsx: JSX_RUNTIME_MODE[opts.jsxConfig.jsx],
        jsxImportSource: opts.jsxConfig.jsxImportSource,

        absWorkingDir,
        outdir: ".",
        write: false,
        metafile: true,

        ...opts?.partialOpts,
        plugins: [
          ...opts?.partialOpts?.plugins ?? [],
          buildIdPlugin(opts.buildID),
          ...denoPlugins({ configPath: opts.configPath }),
        ],
      });

      const dur = (performance.now() - start) / 1e3;
      console.info(` 📦 Fresh bundle: ${dur.toFixed(2)}s`);

      this.#files = new Map<string, Uint8Array>();
      this.#dependencies = new Map<string, string[]>();

      const absWorkingDirLen = toFileUrl(absWorkingDir).href.length + 1;

      for (const file of (bundle?.outputFiles ?? [])) {
        const path = toFileUrl(file.path).href.slice(absWorkingDirLen);
        this.#files.set(path, file.contents);
      }

      const metaOutputs = new Map(
        Object.entries(bundle?.metafile?.outputs ?? {}),
      );

      for (const [path, entry] of metaOutputs.entries()) {
        const imports = entry.imports
          .filter(({ kind }) => kind === "import-statement")
          .map(({ path }) => path);
        this.#dependencies.set(path, imports);
      }
    } finally {
      stopEsbuild();
    }
  }
}

const JSX_RUNTIME_MODE = {
  "react": "transform",
  "react-jsx": "automatic",
} as const;

async function initEsbuild() {
  // deno-lint-ignore no-deprecated-deno-api
  if (Deno.run === undefined) {
    await esbuild.initialize({
      wasmURL: esbuildWasmURL,
      worker: false,
    });
  } else {
    await esbuild.initialize({});
  }
}

function stopEsbuild() {
  esbuild.stop();
}

function buildIdPlugin(buildId: string): esbuildTypes.Plugin {
  const file = import.meta.resolve("../runtime/build_id.ts");
  const url = new URL(file);
  let options: esbuildTypes.OnLoadOptions;
  if (url.protocol === "file:") {
    const path = fromFileUrl(url);
    const filter = new RegExp(`^${regexpEscape(path)}$`);
    options = { filter, namespace: "file" };
  } else {
    const namespace = url.protocol.slice(0, -1);
    const path = url.href.slice(namespace.length + 1);
    const filter = new RegExp(`^${regexpEscape(path)}$`);
    options = { filter, namespace };
  }
  return {
    name: "fresh-build-id",
    setup(build) {
      build.onLoad(
        options,
        () => ({ contents: `export const BUILD_ID = "${buildId}";` }),
      );
    },
  };
}
