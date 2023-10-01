/// <reference types="node" />
import { esbuild } from "../deps.ts";
import * as deno from "./deno.ts";
import { Loader, LoaderResolution } from "./shared.ts";
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
