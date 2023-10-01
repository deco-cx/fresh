var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PortableLoader_instances, _PortableLoader_fetchOngoing, _PortableLoader_fetchModules, _PortableLoader_fetchRedirects, _PortableLoader_resolveRemote, _PortableLoader_loadRemote, _PortableLoader_fetch, _PortableLoader_loadLocal;
import * as dntShim from "../../_dnt.shims.js";
import { fromFileUrl } from "../deps.js";
import { mapContentType, mediaTypeToLoader, parseNpmSpecifier, } from "./shared.js";
export class PortableLoader {
    constructor() {
        _PortableLoader_instances.add(this);
        _PortableLoader_fetchOngoing.set(this, new Map());
        _PortableLoader_fetchModules.set(this, new Map());
        _PortableLoader_fetchRedirects.set(this, new Map());
    }
    async resolve(specifier) {
        switch (specifier.protocol) {
            case "file:": {
                return { kind: "esm", specifier };
            }
            case "http:":
            case "https:":
            case "data:": {
                const module = await __classPrivateFieldGet(this, _PortableLoader_instances, "m", _PortableLoader_loadRemote).call(this, specifier.href);
                return { kind: "esm", specifier: new URL(module.specifier) };
            }
            case "npm:": {
                const npmSpecifier = parseNpmSpecifier(specifier);
                return {
                    kind: "npm",
                    packageId: "",
                    packageName: npmSpecifier.name,
                    path: npmSpecifier.path ?? "",
                };
            }
            case "node:": {
                return { kind: "node", path: specifier.pathname };
            }
            default:
                throw new Error(`Unsupported scheme: '${specifier.protocol}'`);
        }
    }
    async loadEsm(url) {
        let module;
        switch (url.protocol) {
            case "file:": {
                module = await __classPrivateFieldGet(this, _PortableLoader_instances, "m", _PortableLoader_loadLocal).call(this, url);
                break;
            }
            case "http:":
            case "https:":
            case "data:": {
                module = await __classPrivateFieldGet(this, _PortableLoader_instances, "m", _PortableLoader_loadRemote).call(this, url.href);
                break;
            }
            default:
                throw new Error("[unreachable] unsupported esm scheme " + url.protocol);
        }
        const loader = mediaTypeToLoader(module.mediaType);
        const res = { contents: module.data, loader };
        if (url.protocol === "file:") {
            res.watchFiles = [fromFileUrl(module.specifier)];
        }
        return res;
    }
}
_PortableLoader_fetchOngoing = new WeakMap(), _PortableLoader_fetchModules = new WeakMap(), _PortableLoader_fetchRedirects = new WeakMap(), _PortableLoader_instances = new WeakSet(), _PortableLoader_resolveRemote = function _PortableLoader_resolveRemote(specifier) {
    return __classPrivateFieldGet(this, _PortableLoader_fetchRedirects, "f").get(specifier) ?? specifier;
}, _PortableLoader_loadRemote = async function _PortableLoader_loadRemote(specifier) {
    for (let i = 0; i < 10; i++) {
        specifier = __classPrivateFieldGet(this, _PortableLoader_instances, "m", _PortableLoader_resolveRemote).call(this, specifier);
        const module = __classPrivateFieldGet(this, _PortableLoader_fetchModules, "f").get(specifier);
        if (module)
            return module;
        let promise = __classPrivateFieldGet(this, _PortableLoader_fetchOngoing, "f").get(specifier);
        if (!promise) {
            promise = __classPrivateFieldGet(this, _PortableLoader_instances, "m", _PortableLoader_fetch).call(this, specifier);
            __classPrivateFieldGet(this, _PortableLoader_fetchOngoing, "f").set(specifier, promise);
        }
        await promise;
    }
    throw new Error("Too many redirects. Last one: " + specifier);
}, _PortableLoader_fetch = async function _PortableLoader_fetch(specifier) {
    const resp = await fetch(specifier, {
        redirect: "manual",
    });
    if (resp.status < 200 && resp.status >= 400) {
        throw new Error(`Encountered status code ${resp.status} while fetching ${specifier}.`);
    }
    if (resp.status >= 300 && resp.status < 400) {
        await resp.body?.cancel();
        const location = resp.headers.get("location");
        if (!location) {
            throw new Error(`Redirected without location header while fetching ${specifier}.`);
        }
        const url = new URL(location, specifier);
        if (url.protocol !== "https:" && url.protocol !== "http:") {
            throw new Error(`Redirected to unsupported protocol '${url.protocol}' while fetching ${specifier}.`);
        }
        __classPrivateFieldGet(this, _PortableLoader_fetchRedirects, "f").set(specifier, url.href);
        return;
    }
    const contentType = resp.headers.get("content-type");
    const mediaType = mapContentType(new URL(specifier), contentType);
    const data = new Uint8Array(await resp.arrayBuffer());
    __classPrivateFieldGet(this, _PortableLoader_fetchModules, "f").set(specifier, {
        specifier,
        mediaType,
        data,
    });
}, _PortableLoader_loadLocal = async function _PortableLoader_loadLocal(specifier) {
    const path = fromFileUrl(specifier);
    const mediaType = mapContentType(specifier, null);
    const data = await dntShim.Deno.readFile(path);
    return { specifier: specifier.href, mediaType, data };
};
