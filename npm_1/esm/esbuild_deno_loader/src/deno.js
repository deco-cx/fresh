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
var _InfoCache_instances, _InfoCache_options, _InfoCache_modules, _InfoCache_redirects, _InfoCache_npmPackages, _InfoCache_resolve, _InfoCache_getCached, _InfoCache_load;
let tmpDir;
async function info(specifier, options) {
    const opts = {
        args: ["info", "--json"],
        cwd: undefined,
        env: { DENO_NO_PACKAGE_JSON: "true" },
        stdout: "piped",
        stderr: "inherit",
    };
    if (typeof options.config === "string") {
        opts.args.push("--config", options.config);
    }
    else {
        opts.args.push("--no-config");
    }
    if (options.importMap) {
        opts.args.push("--import-map", options.importMap);
    }
    // TODO: enable when https://github.com/denoland/deno/issues/18159 is fixed
    // if (typeof options.lock === "string") {
    //   opts.args.push("--lock", options.lock);
    // } else if (!options.cwd) {
    //   opts.args.push("--no-lock");
    // }
    if (options.nodeModulesDir) {
        opts.args.push("--node-modules-dir");
    }
    if (options.cwd) {
        opts.cwd = options.cwd;
    }
    else {
        if (!tmpDir)
            tmpDir = Deno.makeTempDirSync();
        opts.cwd = tmpDir;
    }
    opts.args.push(specifier);
    const output = await new Deno.Command(Deno.execPath(), opts).output();
    if (!output.success) {
        throw new Error(`Failed to call 'deno info' on '${specifier}'`);
    }
    const txt = new TextDecoder().decode(output.stdout);
    return JSON.parse(txt);
}
export class InfoCache {
    constructor(options = {}) {
        _InfoCache_instances.add(this);
        _InfoCache_options.set(this, void 0);
        _InfoCache_modules.set(this, new Map());
        _InfoCache_redirects.set(this, new Map());
        _InfoCache_npmPackages.set(this, new Map());
        __classPrivateFieldSet(this, _InfoCache_options, options, "f");
    }
    async get(specifier) {
        let entry = __classPrivateFieldGet(this, _InfoCache_instances, "m", _InfoCache_getCached).call(this, specifier);
        if (entry !== undefined)
            return entry;
        await __classPrivateFieldGet(this, _InfoCache_instances, "m", _InfoCache_load).call(this, specifier);
        entry = __classPrivateFieldGet(this, _InfoCache_instances, "m", _InfoCache_getCached).call(this, specifier);
        if (entry === undefined) {
            throw new Error(`Unreachable: '${specifier}' loaded but not reachable`);
        }
        return entry;
    }
    getNpmPackage(id) {
        return __classPrivateFieldGet(this, _InfoCache_npmPackages, "f").get(id);
    }
}
_InfoCache_options = new WeakMap(), _InfoCache_modules = new WeakMap(), _InfoCache_redirects = new WeakMap(), _InfoCache_npmPackages = new WeakMap(), _InfoCache_instances = new WeakSet(), _InfoCache_resolve = function _InfoCache_resolve(specifier) {
    return __classPrivateFieldGet(this, _InfoCache_redirects, "f").get(specifier) ?? specifier;
}, _InfoCache_getCached = function _InfoCache_getCached(specifier) {
    specifier = __classPrivateFieldGet(this, _InfoCache_instances, "m", _InfoCache_resolve).call(this, specifier);
    return __classPrivateFieldGet(this, _InfoCache_modules, "f").get(specifier);
}, _InfoCache_load = async function _InfoCache_load(specifier) {
    const { modules, redirects, npmPackages } = await info(specifier, __classPrivateFieldGet(this, _InfoCache_options, "f"));
    if (modules.length === 0 && Object.keys(redirects).length === 0) {
        __classPrivateFieldGet(this, _InfoCache_modules, "f").set(specifier, {
            specifier,
            kind: "esm",
            local: specifier.replace("file://", ""),
            emit: null,
            map: null,
            mediaType: "JavaScript",
            size: 0,
        });
        return;
    }
    for (const module of modules) {
        __classPrivateFieldGet(this, _InfoCache_modules, "f").set(module.specifier, module);
    }
    for (const [from, to] of Object.entries(redirects)) {
        __classPrivateFieldGet(this, _InfoCache_redirects, "f").set(from, to);
    }
    for (const [id, npmPackage] of Object.entries(npmPackages)) {
        __classPrivateFieldGet(this, _InfoCache_npmPackages, "f").set(id, npmPackage);
    }
    specifier = __classPrivateFieldGet(this, _InfoCache_instances, "m", _InfoCache_resolve).call(this, specifier);
    const entry = __classPrivateFieldGet(this, _InfoCache_modules, "f").get(specifier);
    if (entry === undefined && specifier.startsWith("npm:")) {
        // we hit https://github.com/denoland/deno/issues/18043, so we have to
        // perform another load to get the actual data of the redirected specifier
        await __classPrivateFieldGet(this, _InfoCache_instances, "m", _InfoCache_load).call(this, specifier);
    }
};
