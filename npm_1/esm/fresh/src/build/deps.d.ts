export { fromFileUrl, toFileUrl, } from "../../../deps/deno.land/std@0.193.0/path/mod.js";
export { escape as regexpEscape } from "../../../deps/deno.land/std@0.193.0/regexp/escape.js";
import * as esbuildWasm from "../../../deps/deno.land/x/esbuild@v0.19.2/wasm.js";
declare const esbuild: typeof esbuildWasm;
declare const esbuildWasmURL: string;
export { esbuild, esbuildWasm as esbuildTypes, esbuildWasmURL };
export { denoPlugins } from "../../../esbuild_deno_loader/mod.js";
