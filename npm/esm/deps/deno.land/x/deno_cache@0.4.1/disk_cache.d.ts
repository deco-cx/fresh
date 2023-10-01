/// <reference types="node" />
export declare class DiskCache {
    location: string;
    constructor(location: string);
    get(filename: string): Promise<Uint8Array>;
    set(filename: string, data: Uint8Array): Promise<void>;
    static getCacheFilename(url: URL): string | undefined;
    static getCacheFilenameWithExtension(url: URL, extension: string): string | undefined;
}
