/// <reference types="node" />
import { DiskCache } from "./disk_cache.ts";
import { HttpCache } from "./http_cache.ts";
export declare class DenoDir {
    deps: HttpCache;
    gen: DiskCache;
    root: string;
    constructor(root?: string | URL, readOnly?: boolean);
}
