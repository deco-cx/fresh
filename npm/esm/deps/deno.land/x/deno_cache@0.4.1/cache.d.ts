import type { CacheInfo, LoadResponse } from "./deps.ts";
import { DiskCache } from "./disk_cache.ts";
import type { FileFetcher } from "./file_fetcher.ts";
import type { HttpCache } from "./http_cache.ts";
/** The type of cache information that should be set or retrieved from the
 * cache. */
export type CacheType = "declaration" | "emit" | "sourcemap" | "buildinfo" | "version";
/** Provides an interface to Deno's CLI cache.
 *
 * It is better to use the {@linkcode createCache} function directly. */
export declare class FetchCacher {
    #private;
    constructor(diskCache: DiskCache, httpCache: HttpCache, fileFetcher: FileFetcher, readOnly?: boolean);
    /** Provides information about the state of the cache, which is used by
     * things like [`deno_graph`](https://deno.land/x/deno_graph) to enrich the
     * information about a module graph. */
    cacheInfo: (specifier: string) => CacheInfo;
    get(type: CacheType, specifier: string): Promise<string | undefined>;
    load: (specifier: string) => Promise<LoadResponse | undefined>;
    set(type: CacheType, specifier: string, value: string): Promise<void>;
}
