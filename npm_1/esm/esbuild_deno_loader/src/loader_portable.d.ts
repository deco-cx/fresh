import { esbuild } from "../deps.js";
import { Loader, LoaderResolution } from "./shared.js";
export declare class PortableLoader implements Loader {
    #private;
    resolve(specifier: URL): Promise<LoaderResolution>;
    loadEsm(url: URL): Promise<esbuild.OnLoadResult>;
}
