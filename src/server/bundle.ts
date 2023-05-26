import { BuildOptions } from "https://deno.land/x/esbuild@v0.17.11/mod.js";
import { BUILD_ID } from "./constants.ts";
import { denoPlugin, esbuild, toFileUrl } from "./deps.ts";
import { Island, Plugin } from "./types.ts";
import { once } from "./once.ts";

export interface JSXConfig {
  jsx: "react" | "react-jsx";
  jsxImportSource?: string;
}

const initESBuild = once(async () => {
  // deno-lint-ignore no-deprecated-deno-api
  if (typeof Deno.run !== "undefined") {
    await esbuild.initialize({});

    return;
  }

  // On Deno Deploy, let's use WASM!
  const wasmURL = new URL("./esbuild_v0.17.11.wasm", import.meta.url).href;
  const { body } = await fetch(wasmURL);
  const wasmModule = await WebAssembly.compileStreaming(
    new Response(body, {
      headers: { "Content-Type": "application/wasm" },
    }),
  );
  await esbuild.initialize({ wasmModule, worker: false });
});

const JSX_RUNTIME_MODE = {
  "react": "transform",
  "react-jsx": "automatic",
} as const;

interface Options {
  islands: Island[];
  plugins: Plugin[];
  importMapURL: URL;
  jsxConfig: JSXConfig;
  dev: boolean;
}

const absWorkingDir = Deno.cwd();

const createBundler = ({
  islands,
  plugins,
  importMapURL,
  jsxConfig,
  dev,
}: Options) => {
  const esbuildInit = initESBuild();

  return async () => {
    const start = performance.now();

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

    await esbuildInit;

    // In dev-mode we skip identifier minification to be able to show proper
    // component names in Preact DevTools instead of single characters.
    const minifyOptions: Partial<BuildOptions> = dev
      ? { minifyIdentifiers: false, minifySyntax: true, minifyWhitespace: true }
      : { minify: true };

    const build = await esbuild.build({
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
      target: ["chrome99", "firefox99", "safari15"],
      treeShaking: true,
      write: false,
      jsx: JSX_RUNTIME_MODE[jsxConfig.jsx],
      jsxImportSource: jsxConfig.jsxImportSource,
    });

    console.info(
      `📦 Bundling took ${((performance.now() - start) / 1e3).toFixed(2)}s`,
    );

    return build;
  };
};

export const createAssetsStorage = (options: Options) => {
  const kv = createKv();
  const bundler = createBundler(options);

  // inMemoryCache used in case of failure of Deno.KV or bundle not found
  const inMemoryCache = new Map<string, Uint8Array>();

  const saveBundleOnKv = async () => {
    const start = performance.now();

    // We need to save chunks first, islands/plugins last so we address esm.sh build instabilities
    const isChunk = /\/chunk-[a-zA-Z0-9]*.js/;
    const chunksFirst = [...inMemoryCache.keys()].sort((a, b) => {
      const aIsChunk = isChunk.test(a);
      const bIsChunk = isChunk.test(b);
      const cmp = a > b ? 1 : a < b ? -1 : 0;
      return aIsChunk && bIsChunk ? cmp : aIsChunk ? -10 : bIsChunk ? 10 : cmp;
    });

    for (const file of chunksFirst) {
      const content = inMemoryCache.get(file)!;
      await kv?.saveFile(file, content).catch((e) =>
        console.error(`Error: Saving file to KV failed ${file}\n`, e)
      );
    }

    console.info(
      `💾 Saving bundle to Deno.KV took ${
        ((performance.now() - start) / 1e3).toFixed(2)
      }s`,
    );
  };

  const clearOldData = async () => {
    const start = performance.now();
    await kv?.housekeep();
    console.info(
      `🧹 Housekeeping stale data on Deno.KV took ${
        ((performance.now() - start) / 1e3).toFixed(2)
      }s`,
    );
  };

  const bundleAndCacheOnce = once(async () => {
    const build = await bundler();

    // Save Build on inMemoryCache
    const absDirUrlLength = toFileUrl(absWorkingDir).href.length;
    for (const file of build.outputFiles!) {
      inMemoryCache.set(
        toFileUrl(file.path).href.substring(absDirUrlLength),
        file.contents,
      );
    }
    inMemoryCache.set(
      "/metafile.json",
      new TextEncoder().encode(JSON.stringify(build.metafile)),
    );

    // Fire & forget saving on KV & housekeeping
    kv && saveBundleOnKv().then(clearOldData).catch((e) => console.error(e));
  });

  return {
    get: async (path: string) => {
      const file = inMemoryCache.get(path) ||
        await kv?.getFile(path).catch(() => null);

      if (file instanceof ReadableStream) {
        console.info(`🚤 streaming directly from Deno.KV: ${path}`);
      }

      if (file) return file;

      // Cache not found on both Kv or inMemory, let's build and cache it
      await bundleAndCacheOnce();

      return inMemoryCache.get(path);
    },
  };
};

type PromiseOrValue<T> = T extends Promise<infer K> ? K : T;

export type AssetsStorage = PromiseOrValue<
  ReturnType<typeof createAssetsStorage>
>;

const createKv = () => {
  const chunksize = 65536;
  const namespace = ["_frsh", "js", BUILD_ID];

  // @ts-ignore as `Deno.openKv` is still unstable.
  const kvPromise = Deno.openKv?.();

  if (!kvPromise) return null;

  return {
    getFile: async (file: string) => {
      const kv = await kvPromise;
      const filepath = [...namespace, file];
      const metadata = await kv.get(filepath);

      if (metadata.versionstamp === null) {
        return null;
      }

      return new ReadableStream<Uint8Array>({
        start: async (sink) => {
          for await (const chunk of kv.list({ prefix: filepath })) {
            sink.enqueue(chunk.value as Uint8Array);
          }
          sink.close();
        },
      });
    },
    saveFile: async (file: string, content: Uint8Array) => {
      const kv = await kvPromise;
      const filepath = [...namespace, file];
      const metadata = await kv.get(filepath);

      // Current limitation: As of May 2023, KV Transactions only support a maximum of 10 operations.
      let transaction = kv.atomic();
      let chunks = 0;
      for (; chunks * chunksize < content.length; chunks++) {
        transaction = transaction.set(
          [...filepath, chunks],
          content.slice(chunks * chunksize, (chunks + 1) * chunksize),
        );
      }
      const result = await transaction
        .set(filepath, chunks)
        .check(metadata)
        .commit();

      return result.ok;
    },
    housekeep: async () => {
      const kv = await kvPromise;

      for await (
        const item of kv.list({ prefix: ["_frsh", "js"] })
      ) {
        if (item.key.includes(BUILD_ID)) continue;

        await kv.delete(item.key);
      }
    },
  };
};
