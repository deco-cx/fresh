// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./dev.ts", "./server.ts", "./runtime.ts"],
  outDir: "./npm",
  test: false,
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  typeCheck: false,
  esModule: true,
  scriptModule: false,
  package: {
    // package.json properties
    name: "@marcosvcp/fresh",
    version: Deno.args[0],
    description: "Deno fresh compiled to CommonJS.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/deco-cx/fresh",
    },
    bugs: {
      url: "https://github.com/deco-cx/fresh/issues",
    },
  },
  postBuild() {
    // steps to run after building and before running the tests
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
