/// <reference types="node" />
import * as dntShim from "../../../../_dnt.shims.js";
export declare class HttpCache {
    location: string;
    readOnly?: boolean;
    constructor(location: string, readOnly?: boolean);
    getCacheFilename(url: URL): string;
    get(url: URL): Promise<[dntShim.Deno.FsFile, Record<string, string>] | undefined>;
    set(url: URL, headers: Record<string, string>, content: string): Promise<void>;
}
