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
var _NativeLoader_instances, _NativeLoader_infoCache, _NativeLoader_linkDirCache, _NativeLoader_nodeModulesDirForPackageInner;
import * as dntShim from "../../_dnt.shims.js";
import { base32Encode, DenoDir, dirname, fromFileUrl, join, } from "../deps.js";
import * as deno from "./deno.js";
import { mapContentType, mediaTypeToLoader, parseNpmSpecifier, } from "./shared.js";
let DENO_DIR;
export class NativeLoader {
    constructor(options) {
        _NativeLoader_instances.add(this);
        _NativeLoader_infoCache.set(this, void 0);
        _NativeLoader_linkDirCache.set(this, new Map()); // mapping from package id -> link dir
        __classPrivateFieldSet(this, _NativeLoader_infoCache, new deno.InfoCache(options.infoOptions), "f");
    }
    async resolve(specifier) {
        const entry = await __classPrivateFieldGet(this, _NativeLoader_infoCache, "f").get(specifier.href);
        if ("error" in entry)
            throw new Error(entry.error);
        if (entry.kind === "npm") {
            // TODO(lucacasonato): remove parsing once https://github.com/denoland/deno/issues/18043 is resolved
            const parsed = parseNpmSpecifier(new URL(entry.specifier));
            return {
                kind: "npm",
                packageId: entry.npmPackage,
                packageName: parsed.name,
                path: parsed.path ?? "",
            };
        }
        else if (entry.kind === "node") {
            return {
                kind: "node",
                path: entry.specifier,
            };
        }
        return { kind: "esm", specifier: new URL(entry.specifier) };
    }
    async loadEsm(specifier) {
        if (specifier.protocol === "data:") {
            const resp = await fetch(specifier);
            const contents = new Uint8Array(await resp.arrayBuffer());
            const contentType = resp.headers.get("content-type");
            const mediaType = mapContentType(specifier, contentType);
            const loader = mediaTypeToLoader(mediaType);
            return { contents, loader };
        }
        const entry = await __classPrivateFieldGet(this, _NativeLoader_infoCache, "f").get(specifier.href);
        if ("error" in entry)
            throw new Error(entry.error);
        if (!("local" in entry)) {
            throw new Error("[unreachable] Not an ESM module.");
        }
        if (!entry.local)
            throw new Error("Module not downloaded yet.");
        const loader = mediaTypeToLoader(entry.mediaType);
        const contents = await dntShim.Deno.readFile(entry.local);
        const res = { contents, loader };
        if (specifier.protocol === "file:") {
            res.watchFiles = [fromFileUrl(specifier)];
        }
        return res;
    }
    async nodeModulesDirForPackage(npmPackageId) {
        const npmPackage = __classPrivateFieldGet(this, _NativeLoader_infoCache, "f").getNpmPackage(npmPackageId);
        if (!npmPackage)
            throw new Error("NPM package not found.");
        let linkDir = __classPrivateFieldGet(this, _NativeLoader_linkDirCache, "f").get(npmPackageId);
        if (!linkDir) {
            linkDir = await __classPrivateFieldGet(this, _NativeLoader_instances, "m", _NativeLoader_nodeModulesDirForPackageInner).call(this, npmPackageId, npmPackage);
            __classPrivateFieldGet(this, _NativeLoader_linkDirCache, "f").set(npmPackageId, linkDir);
        }
        return linkDir;
    }
    packageIdFromNameInPackage(name, parentPackageId) {
        const parentPackage = __classPrivateFieldGet(this, _NativeLoader_infoCache, "f").getNpmPackage(parentPackageId);
        if (!parentPackage)
            throw new Error("NPM package not found.");
        if (parentPackage.name === name)
            return parentPackageId;
        for (const dep of parentPackage.dependencies) {
            const depPackage = __classPrivateFieldGet(this, _NativeLoader_infoCache, "f").getNpmPackage(dep);
            if (!depPackage)
                throw new Error("NPM package not found.");
            if (depPackage.name === name)
                return dep;
        }
        throw new Error("NPM package not found.");
    }
}
_NativeLoader_infoCache = new WeakMap(), _NativeLoader_linkDirCache = new WeakMap(), _NativeLoader_instances = new WeakSet(), _NativeLoader_nodeModulesDirForPackageInner = async function _NativeLoader_nodeModulesDirForPackageInner(npmPackageId, npmPackage) {
    let name = npmPackage.name;
    if (name.toLowerCase() !== name) {
        name = `_${base32Encode(new TextEncoder().encode(name))}`;
    }
    if (!DENO_DIR)
        DENO_DIR = new DenoDir(undefined, true);
    const packageDir = join(DENO_DIR.root, "npm", "registry.npmjs.org", name, npmPackage.version);
    const linkDir = join(DENO_DIR.root, "deno_esbuild", npmPackageId, "node_modules", name);
    const linkDirParent = dirname(linkDir);
    // check if the package is already linked, if so, return the link and skip
    // a bunch of work
    try {
        await dntShim.Deno.stat(linkDir);
        __classPrivateFieldGet(this, _NativeLoader_linkDirCache, "f").set(npmPackageId, linkDir);
        return linkDir;
    }
    catch {
        // directory does not yet exist
    }
    // create a temporary directory, recursively hardlink the package contents
    // into it, and then rename it to the final location
    const tmpDir = await dntShim.Deno.makeTempDir();
    await linkRecursive(packageDir, tmpDir);
    try {
        await dntShim.Deno.mkdir(linkDirParent, { recursive: true });
        await dntShim.Deno.rename(tmpDir, linkDir);
    }
    catch (err) {
        if (err instanceof dntShim.Deno.errors.AlreadyExists) {
            // ignore
        }
        else {
            throw err;
        }
    }
    return linkDir;
};
async function linkRecursive(from, to) {
    const fromStat = await dntShim.Deno.stat(from);
    if (fromStat.isDirectory) {
        await dntShim.Deno.mkdir(to, { recursive: true });
        for await (const entry of dntShim.Deno.readDir(from)) {
            await linkRecursive(join(from, entry.name), join(to, entry.name));
        }
    }
    else {
        await dntShim.Deno.link(from, to);
    }
}
