import { DiskCache } from "./disk_cache.js";
import { HttpCache } from "./http_cache.js";
export declare class DenoDir {
    deps: HttpCache;
    gen: DiskCache;
    root: string;
    constructor(root?: string | URL, readOnly?: boolean);
}
