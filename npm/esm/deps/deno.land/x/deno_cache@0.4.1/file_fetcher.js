var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FileFetcher_instances, _FileFetcher_allowRemote, _FileFetcher_authTokens, _FileFetcher_cache, _FileFetcher_cacheSetting, _FileFetcher_httpCache, _FileFetcher_fetchBlobDataUrl, _FileFetcher_fetchCached, _FileFetcher_fetchRemote;
// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";
import { AuthTokens } from "./auth_tokens.ts";
import { colors, fromFileUrl, readAll } from "./deps.ts";
function shouldUseCache(cacheSetting, specifier) {
    switch (cacheSetting) {
        case "only":
        case "use":
            return true;
        case "reloadAll":
            return false;
        default: {
            const specifierStr = specifier.toString();
            for (const value of cacheSetting) {
                if (specifierStr.startsWith(value)) {
                    return false;
                }
            }
            return true;
        }
    }
}
const SUPPORTED_SCHEMES = [
    "data:",
    "blob:",
    "file:",
    "http:",
    "https:",
];
function getValidatedScheme(specifier) {
    const scheme = specifier.protocol;
    // deno-lint-ignore no-explicit-any
    if (!SUPPORTED_SCHEMES.includes(scheme)) {
        throw new TypeError(`Unsupported scheme "${scheme}" for module "${specifier.toString()}". Supported schemes: ${JSON.stringify(SUPPORTED_SCHEMES)}.`);
    }
    return scheme;
}
export function stripHashbang(value) {
    return value.startsWith("#!") ? value.slice(value.indexOf("\n")) : value;
}
async function fetchLocal(specifier) {
    const local = fromFileUrl(specifier);
    if (!local) {
        throw new TypeError(`Invalid file path.\n  Specifier: ${specifier.toString()}`);
    }
    try {
        const source = await dntShim.Deno.readTextFile(local);
        const content = stripHashbang(source);
        return {
            kind: "module",
            content,
            specifier: specifier.toString(),
        };
    }
    catch {
        // ignoring errors, we will just return undefined
    }
}
const decoder = new TextDecoder();
export class FileFetcher {
    constructor(httpCache, cacheSetting = "use", allowRemote = true) {
        _FileFetcher_instances.add(this);
        _FileFetcher_allowRemote.set(this, void 0);
        _FileFetcher_authTokens.set(this, void 0);
        _FileFetcher_cache.set(this, new Map());
        _FileFetcher_cacheSetting.set(this, void 0);
        _FileFetcher_httpCache.set(this, void 0);
        dntShim.Deno.permissions.request({ name: "env", variable: "DENO_AUTH_TOKENS" });
        __classPrivateFieldSet(this, _FileFetcher_authTokens, new AuthTokens(dntShim.Deno.env.get("DENO_AUTH_TOKENS")), "f");
        __classPrivateFieldSet(this, _FileFetcher_allowRemote, allowRemote, "f");
        __classPrivateFieldSet(this, _FileFetcher_cacheSetting, cacheSetting, "f");
        __classPrivateFieldSet(this, _FileFetcher_httpCache, httpCache, "f");
    }
    async fetch(specifier) {
        const scheme = getValidatedScheme(specifier);
        const response = __classPrivateFieldGet(this, _FileFetcher_cache, "f").get(specifier.toString());
        if (response) {
            return response;
        }
        else if (scheme === "file:") {
            return fetchLocal(specifier);
        }
        else if (scheme === "data:" || scheme === "blob:") {
            const response = await __classPrivateFieldGet(this, _FileFetcher_instances, "m", _FileFetcher_fetchBlobDataUrl).call(this, specifier);
            __classPrivateFieldGet(this, _FileFetcher_cache, "f").set(specifier.toString(), response);
            return response;
        }
        else if (!__classPrivateFieldGet(this, _FileFetcher_allowRemote, "f")) {
            throw new dntShim.Deno.errors.PermissionDenied(`A remote specifier was requested: "${specifier.toString()}", but --no-remote is specifier`);
        }
        else {
            const response = await __classPrivateFieldGet(this, _FileFetcher_instances, "m", _FileFetcher_fetchRemote).call(this, specifier, 10);
            if (response) {
                __classPrivateFieldGet(this, _FileFetcher_cache, "f").set(specifier.toString(), response);
            }
            return response;
        }
    }
}
_FileFetcher_allowRemote = new WeakMap(), _FileFetcher_authTokens = new WeakMap(), _FileFetcher_cache = new WeakMap(), _FileFetcher_cacheSetting = new WeakMap(), _FileFetcher_httpCache = new WeakMap(), _FileFetcher_instances = new WeakSet(), _FileFetcher_fetchBlobDataUrl = async function _FileFetcher_fetchBlobDataUrl(specifier) {
    const cached = await __classPrivateFieldGet(this, _FileFetcher_instances, "m", _FileFetcher_fetchCached).call(this, specifier, 0);
    if (cached) {
        return cached;
    }
    if (__classPrivateFieldGet(this, _FileFetcher_cacheSetting, "f") === "only") {
        throw new dntShim.Deno.errors.NotFound(`Specifier not found in cache: "${specifier.toString()}", --cached-only is specified.`);
    }
    const response = await fetch(specifier.toString());
    const content = await response.text();
    const headers = {};
    for (const [key, value] of response.headers) {
        headers[key.toLowerCase()] = value;
    }
    await __classPrivateFieldGet(this, _FileFetcher_httpCache, "f").set(specifier, headers, content);
    return {
        kind: "module",
        specifier: specifier.toString(),
        headers,
        content,
    };
}, _FileFetcher_fetchCached = async function _FileFetcher_fetchCached(specifier, redirectLimit) {
    if (redirectLimit < 0) {
        throw new dntShim.Deno.errors.Http("Too many redirects");
    }
    const cached = await __classPrivateFieldGet(this, _FileFetcher_httpCache, "f").get(specifier);
    if (!cached) {
        return undefined;
    }
    const [file, headers] = cached;
    const location = headers["location"];
    if (location) {
        const redirect = new URL(location, specifier);
        file.close();
        return __classPrivateFieldGet(this, _FileFetcher_instances, "m", _FileFetcher_fetchCached).call(this, redirect, redirectLimit - 1);
    }
    const bytes = await readAll(file);
    file.close();
    const content = decoder.decode(bytes);
    return {
        kind: "module",
        specifier: specifier.toString(),
        headers,
        content,
    };
}, _FileFetcher_fetchRemote = async function _FileFetcher_fetchRemote(specifier, redirectLimit) {
    if (redirectLimit < 0) {
        throw new dntShim.Deno.errors.Http("Too many redirects.");
    }
    if (shouldUseCache(__classPrivateFieldGet(this, _FileFetcher_cacheSetting, "f"), specifier)) {
        const response = await __classPrivateFieldGet(this, _FileFetcher_instances, "m", _FileFetcher_fetchCached).call(this, specifier, redirectLimit);
        if (response) {
            return response;
        }
    }
    if (__classPrivateFieldGet(this, _FileFetcher_cacheSetting, "f") === "only") {
        throw new dntShim.Deno.errors.NotFound(`Specifier not found in cache: "${specifier.toString()}", --cached-only is specified.`);
    }
    const requestHeaders = new Headers();
    const cached = await __classPrivateFieldGet(this, _FileFetcher_httpCache, "f").get(specifier);
    if (cached) {
        const [file, cachedHeaders] = cached;
        file.close();
        if (cachedHeaders["etag"]) {
            requestHeaders.append("if-none-match", cachedHeaders["etag"]);
        }
    }
    const authToken = __classPrivateFieldGet(this, _FileFetcher_authTokens, "f").get(specifier);
    if (authToken) {
        requestHeaders.append("authorization", authToken);
    }
    console.log(`${colors.green("Download")} ${specifier.toString()}`);
    const response = await fetch(specifier.toString(), {
        headers: requestHeaders,
    });
    if (!response.ok) {
        if (response.status === 404) {
            return undefined;
        }
        else {
            throw new dntShim.Deno.errors.Http(`${response.status} ${response.statusText}`);
        }
    }
    // WHATWG fetch follows redirects automatically, so we will try to
    // determine if that ocurred and cache the value.
    if (specifier.toString() !== response.url) {
        const headers = { "location": response.url };
        await __classPrivateFieldGet(this, _FileFetcher_httpCache, "f").set(specifier, headers, "");
    }
    const url = new URL(response.url);
    const content = await response.text();
    const headers = {};
    for (const [key, value] of response.headers) {
        headers[key.toLowerCase()] = value;
    }
    await __classPrivateFieldGet(this, _FileFetcher_httpCache, "f").set(url, headers, content);
    return {
        kind: "module",
        specifier: response.url,
        headers,
        content,
    };
};
