/// <reference types="node" />
import { esbuild } from "../deps.ts";
import { Loader, LoaderResolution } from "./shared.ts";
export declare class PortableLoader implements Loader {
    #private;
    resolve(specifier: URL): Promise<LoaderResolution>;
    loadEsm(url: URL): Promise<esbuild.OnLoadResult>;
}
