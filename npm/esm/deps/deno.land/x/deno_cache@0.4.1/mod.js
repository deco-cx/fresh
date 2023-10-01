// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
/**
 * A module which provides a TypeScript implementation of the Deno CLI's cache
 * directory logic (`DENO_DIR`). This can be used in combination with other
 * modules to provide user loadable APIs that are like the Deno CLI's
 * functionality.
 *
 * This also can provide user read access in Deploy to a Deno CLI's cache when
 * the cache is checked into the repository.
 *
 * ### Example
 *
 * ```ts
 * import { createCache } from "https://deno.land/x/deno_cache/mod.ts";
 * import { createGraph } from "https://deno.land/x/deno_graph/mod.ts";
 *
 * // create a cache where the location will be determined environmentally
 * const cache = createCache();
 * // destructuring the two functions we need to pass to the graph
 * const { cacheInfo, load } = cache;
 * // create a graph that will use the cache above to load and cache dependencies
 * const graph = await createGraph("https://deno.land/x/oak@v9.0.1/mod.ts", {
 *   cacheInfo,
 *   load,
 * });
 *
 * // log out the console a similar output to `deno info` on the command line.
 * console.log(graph.toString());
 * ```
 *
 * @module
 */
import { FetchCacher } from "./cache.js";
import { DenoDir } from "./deno_dir.js";
import { FileFetcher } from "./file_fetcher.js";
export { FetchCacher } from "./cache.js";
export { DenoDir } from "./deno_dir.js";
export { FileFetcher } from "./file_fetcher.js";
/**
 * Creates a cache object that allows access to the internal `DENO_DIR` cache
 * structure for remote dependencies and cached output of emitted modules.
 */
export function createCache({ root, cacheSetting = "use", allowRemote = true, readOnly } = {}) {
    const denoDir = new DenoDir(root, readOnly);
    const fileFetcher = new FileFetcher(denoDir.deps, cacheSetting, allowRemote);
    return new FetchCacher(denoDir.gen, denoDir.deps, fileFetcher, readOnly);
}
