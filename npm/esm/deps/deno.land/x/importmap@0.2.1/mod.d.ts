/// <reference types="node" />
import { ImportMap } from "./_util.ts";
export type { ImportMap, Scopes, SpecifierMap } from "./_util.ts";
export declare function resolveImportMap(importMap: ImportMap, baseURL: URL): ImportMap;
export declare function resolveModuleSpecifier(specifier: string, { imports, scopes }: ImportMap, baseURL: URL): string;
