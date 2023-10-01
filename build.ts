import { join } from "https://deno.land/std@0.140.0/path/mod.ts";
import { EsbuildBuilder } from "./src/build/esbuild.ts";

const builder = new EsbuildBuilder({
  buildID: crypto.randomUUID(),
  configPath: join(Deno.cwd(), "deno.json"),
  dev: false,
  entrypoints: {
    "context.ts": join(Deno.cwd(), "src/server/context.ts"),
    "dev.ts": join(Deno.cwd(), "dev.ts"),
    "server.ts": join(Deno.cwd(), "server.ts"),
    "runtime.ts": join(Deno.cwd(), "runtime.ts"),
  },
  jsxConfig: {
    "jsx": "react-jsx",
    "jsxImportSource": "preact",
  },
  partialOpts: {
    platform: "node",
    format: "esm",
    bundle: true,
    splitting: false,
    treeShaking: false,
    write: true,
    metafile: false,
    plugins: [],
  },
});

await builder.build();
