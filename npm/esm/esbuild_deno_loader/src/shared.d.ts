/// <reference types="node" />
import { esbuild } from "../deps.js";
import { MediaType } from "./deno.js";
export interface Loader {
    resolve(specifier: URL): Promise<LoaderResolution>;
    loadEsm(specifier: URL): Promise<esbuild.OnLoadResult>;
    packageIdFromNameInPackage?(name: string, parentPackageId: string): string;
    nodeModulesDirForPackage?(npmPackageId?: string): Promise<string>;
}
export type LoaderResolution = LoaderResolutionEsm | LoaderResolutionNpm | LoaderResolutionNode;
export interface LoaderResolutionEsm {
    kind: "esm";
    specifier: URL;
}
export interface LoaderResolutionNpm {
    kind: "npm";
    packageId: string;
    packageName: string;
    path: string;
}
export interface LoaderResolutionNode {
    kind: "node";
    path: string;
}
export declare function mediaTypeToLoader(mediaType: MediaType): esbuild.Loader;
export interface EsbuildResolution {
    namespace: string;
    path: string;
}
export declare function urlToEsbuildResolution(url: URL): EsbuildResolution;
export declare function esbuildResolutionToURL(specifier: EsbuildResolution): URL;
interface DenoConfig {
    imports?: unknown;
    scopes?: unknown;
    lock?: boolean | string;
    importMap?: string;
}
export declare function readDenoConfig(path: string): Promise<DenoConfig>;
export declare function mapContentType(specifier: URL, contentType: string | null): MediaType;
export interface NpmSpecifier {
    name: string;
    version: string | null;
    path: string | null;
}
export declare function parseNpmSpecifier(specifier: URL): NpmSpecifier;
export {};
