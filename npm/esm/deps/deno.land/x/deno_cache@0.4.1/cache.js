var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _FetchCacher_instances, _FetchCacher_diskCache, _FetchCacher_fileFetcher, _FetchCacher_httpCache, _FetchCacher_readOnly, _FetchCacher_getEmitMetadata, _FetchCacher_setEmitMetadata;
// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";
import { join } from "./deps.ts";
import { DiskCache } from "./disk_cache.ts";
import { isFile, isFileSync } from "./util.ts";
const decoder = new TextDecoder();
const encoder = new TextEncoder();
/** Provides an interface to Deno's CLI cache.
 *
 * It is better to use the {@linkcode createCache} function directly. */
export class FetchCacher {
    constructor(diskCache, httpCache, fileFetcher, readOnly) {
        _FetchCacher_instances.add(this);
        _FetchCacher_diskCache.set(this, void 0);
        _FetchCacher_fileFetcher.set(this, void 0);
        _FetchCacher_httpCache.set(this, void 0);
        _FetchCacher_readOnly.set(this, void 0);
        /** Provides information about the state of the cache, which is used by
         * things like [`deno_graph`](https://deno.land/x/deno_graph) to enrich the
         * information about a module graph. */
        Object.defineProperty(this, "cacheInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (specifier) => {
                // when we are "read-only" (e.g. Deploy) we can access sync versions of APIs
                // so we can't return the cache info synchronously.
                if (__classPrivateFieldGet(this, _FetchCacher_readOnly, "f")) {
                    return {};
                }
                const url = new URL(specifier);
                const local = __classPrivateFieldGet(this, _FetchCacher_httpCache, "f").getCacheFilename(url);
                const emitCache = DiskCache.getCacheFilenameWithExtension(url, "js");
                const mapCache = DiskCache.getCacheFilenameWithExtension(url, "js.map");
                const emit = emitCache
                    ? join(__classPrivateFieldGet(this, _FetchCacher_diskCache, "f").location, emitCache)
                    : undefined;
                const map = mapCache ? join(__classPrivateFieldGet(this, _FetchCacher_diskCache, "f").location, mapCache) : undefined;
                return {
                    local: isFileSync(local) ? local : undefined,
                    emit: emit && isFileSync(emit) ? emit : undefined,
                    map: map && isFileSync(map) ? map : undefined,
                };
            }
        });
        Object.defineProperty(this, "load", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: (specifier) => {
                const url = new URL(specifier);
                return __classPrivateFieldGet(this, _FetchCacher_fileFetcher, "f").fetch(url);
            }
        });
        __classPrivateFieldSet(this, _FetchCacher_diskCache, diskCache, "f");
        __classPrivateFieldSet(this, _FetchCacher_fileFetcher, fileFetcher, "f");
        __classPrivateFieldSet(this, _FetchCacher_httpCache, httpCache, "f");
        if (readOnly === undefined) {
            (async () => {
                __classPrivateFieldSet(this, _FetchCacher_readOnly, (await dntShim.Deno.permissions.query({ name: "write" })).state === "denied", "f");
            })();
        }
        else {
            __classPrivateFieldSet(this, _FetchCacher_readOnly, readOnly, "f");
        }
    }
    async get(type, specifier) {
        const url = new URL(specifier);
        let extension;
        switch (type) {
            case "declaration":
                extension = "d.ts";
                break;
            case "emit":
                extension = "js";
                break;
            case "sourcemap":
                extension = "js.map";
                break;
            case "buildinfo":
                extension = "buildinfo";
                break;
            case "version": {
                const data = await __classPrivateFieldGet(this, _FetchCacher_instances, "m", _FetchCacher_getEmitMetadata).call(this, url);
                return data ? data.version_hash : undefined;
            }
        }
        const filename = DiskCache.getCacheFilenameWithExtension(url, extension);
        if (filename) {
            const data = await __classPrivateFieldGet(this, _FetchCacher_diskCache, "f").get(filename);
            return decoder.decode(data);
        }
    }
    async set(type, specifier, value) {
        const url = new URL(specifier);
        let extension;
        switch (type) {
            case "declaration":
                extension = "d.ts";
                break;
            case "emit":
                extension = "js";
                break;
            case "sourcemap":
                extension = "js.map";
                break;
            case "buildinfo":
                extension = "buildinfo";
                break;
            case "version": {
                let data = await __classPrivateFieldGet(this, _FetchCacher_instances, "m", _FetchCacher_getEmitMetadata).call(this, url);
                if (data) {
                    data.version_hash = value;
                }
                else {
                    data = {
                        version_hash: value,
                    };
                }
                return __classPrivateFieldGet(this, _FetchCacher_instances, "m", _FetchCacher_setEmitMetadata).call(this, url, data);
            }
        }
        const filename = DiskCache.getCacheFilenameWithExtension(url, extension);
        if (filename) {
            await __classPrivateFieldGet(this, _FetchCacher_diskCache, "f").set(filename, encoder.encode(value));
        }
    }
}
_FetchCacher_diskCache = new WeakMap(), _FetchCacher_fileFetcher = new WeakMap(), _FetchCacher_httpCache = new WeakMap(), _FetchCacher_readOnly = new WeakMap(), _FetchCacher_instances = new WeakSet(), _FetchCacher_getEmitMetadata = async function _FetchCacher_getEmitMetadata(specifier) {
    const filename = DiskCache.getCacheFilenameWithExtension(specifier, "meta");
    if (!filename || !(await isFile(filename))) {
        return undefined;
    }
    const bytes = await __classPrivateFieldGet(this, _FetchCacher_diskCache, "f").get(filename);
    return JSON.parse(decoder.decode(bytes));
}, _FetchCacher_setEmitMetadata = async function _FetchCacher_setEmitMetadata(specifier, data) {
    const filename = DiskCache.getCacheFilenameWithExtension(specifier, "meta");
    if (!filename) {
        return;
    }
    const bytes = encoder.encode(JSON.stringify(data));
    await __classPrivateFieldGet(this, _FetchCacher_diskCache, "f").set(filename, bytes);
};
