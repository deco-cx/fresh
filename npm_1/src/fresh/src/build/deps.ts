// -- $std --
export {
  fromFileUrl,
  toFileUrl,
} from "../../../deps/deno.land/std@0.193.0/path/mod.js";
export { escape as regexpEscape } from "../../../deps/deno.land/std@0.193.0/regexp/escape.js";

// -- esbuild --
import * as esbuildWasm from "../../../deps/deno.land/x/esbuild@v0.19.2/wasm.js";
import * as esbuildNative from "../../../deps/deno.land/x/esbuild@v0.19.2/mod.js";
// @ts-ignore trust me
// deno-lint-ignore no-deprecated-deno-api
const esbuild: typeof esbuildWasm = Deno.run === undefined
  ? esbuildWasm
  : esbuildNative;
const esbuildWasmURL = new URL("./esbuild_v0.18.11.wasm", import.meta.url).href;
export { esbuild, esbuildWasm as esbuildTypes, esbuildWasmURL };

export { denoPlugins } from "../../../esbuild_deno_loader/mod.js";
