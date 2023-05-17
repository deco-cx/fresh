import {
  BuildOptions,
  BuildResult,
} from "https://deno.land/x/esbuild@v0.17.11/mod.js";
import { BUILD_ID } from "./constants.ts";
import { denoPlugin, esbuild, join, toFileUrl } from "./deps.ts";
import { Island, Plugin } from "./types.ts";
import { BlobStorage, fsStorage, inMemoryStorage } from "./storage.ts";

export interface JSXConfig {
  jsx: "react" | "react-jsx";
  jsxImportSource?: string;
}

let esBuildInitPromise: Promise<void> | undefined = undefined;
const ensureEsbuildInitialized = () => {
  if (!esBuildInitPromise) {
    const onDenoDeploy = Deno.run === undefined;

    esBuildInitPromise = onDenoDeploy
      ? fetch(new URL("./esbuild_v0.17.11.wasm", import.meta.url))
        .then((r) =>
          WebAssembly.compileStreaming(
            new Response(r.body, {
              headers: { "Content-Type": "application/wasm" },
            }),
          )
        )
        .then((wasmModule) => esbuild.initialize({ wasmModule, worker: false }))
      : esbuild.initialize({});
  }

  return esBuildInitPromise;
};

const JSX_RUNTIME_MODE = {
  "react": "transform",
  "react-jsx": "automatic",
} as const;

interface Options {
  importMapURL: URL;
  jsxConfig: JSXConfig;
  islands: Island[];
  plugins: Plugin[];
  dev: boolean;
  absWorkingDir: string;
}

const bundle = async (
  { importMapURL, dev, islands, plugins, jsxConfig, absWorkingDir }: Options,
) => {
  const entryPoints: Record<string, string> = {
    main: dev
      ? new URL("../../src/runtime/main_dev.ts", import.meta.url).href
      : new URL("../../src/runtime/main.ts", import.meta.url).href,
  };

  for (const island of islands) {
    entryPoints[`island-${island.id}`] = island.url;
  }

  for (const plugin of plugins) {
    for (const [name, url] of Object.entries(plugin.entrypoints ?? {})) {
      entryPoints[`plugin-${plugin.name}-${name}`] = url;
    }
  }

  await ensureEsbuildInitialized();
  // In dev-mode we skip identifier minification to be able to show proper
  // component names in Preact DevTools instead of single characters.
  const minifyOptions: Partial<BuildOptions> = dev
    ? { minifyIdentifiers: false, minifySyntax: true, minifyWhitespace: true }
    : { minify: true };
  const bundle = await esbuild.build({
    bundle: true,
    define: { __FRSH_BUILD_ID: `"${BUILD_ID}"` },
    entryPoints,
    format: "esm",
    metafile: true,
    ...minifyOptions,
    outdir: ".",
    // This is requried to ensure the format of the outputFiles path is the same
    // between windows and linux
    absWorkingDir,
    outfile: "",
    platform: "neutral",
    plugins: [denoPlugin({ importMapURL: importMapURL })],
    sourcemap: dev ? "linked" : false,
    splitting: true,
    target: ["chrome99", "firefox99", "safari11", "safari15"],
    treeShaking: true,
    write: false,
    jsx: JSX_RUNTIME_MODE[jsxConfig.jsx],
    jsxImportSource: jsxConfig.jsxImportSource,
  });

  return bundle;
};

const storeBundle = async (
  bundle: BuildResult,
  storage: BlobStorage,
  absWorkingDir: string,
) => {
  await storage.clear();

  const absDirUrlLength = toFileUrl(absWorkingDir).href.length;

  await Promise.all([
    bundle.outputFiles?.map((file) =>
      storage.set(
        toFileUrl(file.path).href.substring(absDirUrlLength),
        file.contents,
      )
    ),
  ]);
};

export const createBundle = async (
  options: Omit<Options, "absWorkingDir">,
): Promise<BlobStorage> => {
  const absWorkingDir = Deno.cwd();
  const storagePath = join(absWorkingDir, "/.frsh");

  if (options.dev) {
    const fs = await fsStorage(storagePath);
    const inMemory = inMemoryStorage();

    const [prod, dev] = await Promise.all([
      bundle({ ...options, dev: false, absWorkingDir }),
      bundle({ ...options, dev: true, absWorkingDir }),
    ]);

    await Promise.all([
      storeBundle(prod, fs, absWorkingDir),
      storeBundle(dev, inMemory, absWorkingDir),
    ]);

    return inMemory;
  } else {
    return fsStorage(storagePath);
  }
};
