// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import { dirname, ensureDir, extname, isAbsolute, join } from "./deps.js";
import { assert, CACHE_PERM, isFile, urlToFilename } from "./util.js";
class Metadata {
    constructor(headers, url) {
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "url", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.headers = headers;
        this.url = url;
    }
    async write(cacheFilename) {
        const metadataFilename = Metadata.filename(cacheFilename);
        const json = JSON.stringify({
            headers: this.headers,
            url: this.url,
        }, undefined, "  ");
        await Deno.writeTextFile(metadataFilename, json, { mode: CACHE_PERM });
    }
    static filename(cacheFilename) {
        const currentExt = extname(cacheFilename);
        if (currentExt) {
            const re = new RegExp(`\\${currentExt}$`);
            return cacheFilename.replace(re, ".metadata.json");
        }
        else {
            return `${cacheFilename}.metadata.json`;
        }
    }
}
export class HttpCache {
    constructor(location, readOnly) {
        Object.defineProperty(this, "location", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "readOnly", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        assert(isAbsolute(location));
        this.location = location;
        this.readOnly = readOnly;
    }
    getCacheFilename(url) {
        return join(this.location, urlToFilename(url));
    }
    async get(url) {
        const cacheFilename = join(this.location, urlToFilename(url));
        const metadataFilename = Metadata.filename(cacheFilename);
        if (!(await isFile(cacheFilename))) {
            return undefined;
        }
        const file = await Deno.open(cacheFilename, { read: true });
        const metadataStr = await Deno.readTextFile(metadataFilename);
        const metadata = JSON.parse(metadataStr);
        assert(metadata.headers);
        return [file, metadata.headers];
    }
    async set(url, headers, content) {
        if (this.readOnly === undefined) {
            this.readOnly =
                (await Deno.permissions.query({ name: "write" })).state === "denied"
                    ? true
                    : false;
        }
        if (this.readOnly) {
            return;
        }
        const cacheFilename = join(this.location, urlToFilename(url));
        const parentFilename = dirname(cacheFilename);
        await ensureDir(parentFilename);
        await Deno.writeTextFile(cacheFilename, content, { mode: CACHE_PERM });
        const metadata = new Metadata(headers, url);
        await metadata.write(cacheFilename);
    }
}
