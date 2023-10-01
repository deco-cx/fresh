import { esbuild } from "../deps.js";
import * as deno from "./deno.js";
import { Loader, LoaderResolution } from "./shared.js";
export interface NativeLoaderOptions {
    infoOptions?: deno.InfoOptions;
}
export declare class NativeLoader implements Loader {
    #private;
    constructor(options: NativeLoaderOptions);
    resolve(specifier: URL): Promise<LoaderResolution>;
    loadEsm(specifier: URL): Promise<esbuild.OnLoadResult>;
    nodeModulesDirForPackage(npmPackageId: string): Promise<string>;
    packageIdFromNameInPackage(name: string, parentPackageId: string): string;
}
