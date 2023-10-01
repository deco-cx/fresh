export { deflate, inflate, gzip, gunzip, zlib, unzlib, } from "./pkg/denoflate.ts";
import init from "./pkg/denoflate.ts";
import { wasm } from "./pkg/denoflate_bg.wasm.ts";
await init(wasm);
