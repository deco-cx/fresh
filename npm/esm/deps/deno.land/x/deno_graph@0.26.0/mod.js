// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
/**
 * A JavaScript/TypeScript interface to the Deno CLI's module graph logic.
 *
 * ### Example
 *
 * To build and output a graph as a JSON structure to the console:
 *
 * ```ts
 * import { createGraph } from "https://deno.land/x/deno_graph@{VERSION}/mod.ts";
 *
 * const graph = await createGraph("https://deno.land/x/std/testing/asserts.ts");
 *
 * console.log(JSON.stringify(graph, undefined, "  "));
 * ```
 *
 * @module
 */
import { createGraph as jsCreateGraph, parseModule as jsParseModule, } from "./lib/deno_graph.generated.js";
import { load as defaultLoad } from "./lib/loader.js";
export { load } from "./lib/loader.js";
export function createGraph(rootSpecifiers, options = {}) {
    rootSpecifiers = Array.isArray(rootSpecifiers)
        ? rootSpecifiers
        : [rootSpecifiers];
    const { load = defaultLoad, jsxImportSourceModule, cacheInfo, resolve, resolveTypes, check, getChecksum, lockFilename, kind, imports, } = options;
    return jsCreateGraph(rootSpecifiers, load, jsxImportSourceModule, cacheInfo, resolve, resolveTypes, check, getChecksum, lockFilename, kind, imports);
}
/** Parse a module based on the supplied information and return its analyzed
 * representation. If an error is encountered when parsing, the function will
 * throw.
 *
 * @param specifier The URL text specifier to use when parsing the module.
 * @param content The content of the module to be parsed.
 * @param options Options to use when parsing the module.
 */
export function parseModule(specifier, content, options = {}) {
    const { headers, jsxImportSourceModule, kind, resolve, resolveTypes } = options;
    return jsParseModule(specifier, headers, jsxImportSourceModule, content, kind, resolve, resolveTypes);
}
