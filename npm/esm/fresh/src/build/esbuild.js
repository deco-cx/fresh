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
var _EsbuildBuilder_options, _EsbuildBuilder_files, _EsbuildBuilder_dependencies, _EsbuildBuilder_build;
import * as dntShim from "../../../_dnt.shims.js";
import { denoPlugins, esbuild, esbuildWasmURL, fromFileUrl, regexpEscape, toFileUrl, } from "./deps.js";
import { getDependencies, saveSnapshot } from "./kv.js";
import { getFile } from "./kvfs.js";
export class EsbuildBuilder {
    constructor(options) {
        _EsbuildBuilder_options.set(this, void 0);
        _EsbuildBuilder_files.set(this, void 0);
        _EsbuildBuilder_dependencies.set(this, void 0);
        _EsbuildBuilder_build.set(this, void 0);
        __classPrivateFieldSet(this, _EsbuildBuilder_options, options, "f");
        __classPrivateFieldSet(this, _EsbuildBuilder_files, new Map(), "f");
        __classPrivateFieldSet(this, _EsbuildBuilder_dependencies, null, "f");
        __classPrivateFieldSet(this, _EsbuildBuilder_build, null, "f");
    }
    async read(path) {
        const content = __classPrivateFieldGet(this, _EsbuildBuilder_files, "f").get(path) || await getFile(path);
        if (content)
            return content;
        if (!__classPrivateFieldGet(this, _EsbuildBuilder_build, "f")) {
            __classPrivateFieldSet(this, _EsbuildBuilder_build, this.build(), "f");
            __classPrivateFieldGet(this, _EsbuildBuilder_build, "f")
                .then(() => saveSnapshot(__classPrivateFieldGet(this, _EsbuildBuilder_files, "f"), __classPrivateFieldGet(this, _EsbuildBuilder_dependencies, "f")))
                .catch((error) => console.error(error));
        }
        await __classPrivateFieldGet(this, _EsbuildBuilder_build, "f");
        return __classPrivateFieldGet(this, _EsbuildBuilder_files, "f").get(path) || null;
    }
    // Lazy load dependencies from KV to avoid blocking first render
    dependencies(path) {
        const deps = __classPrivateFieldGet(this, _EsbuildBuilder_dependencies, "f")?.get(path);
        if (!__classPrivateFieldGet(this, _EsbuildBuilder_dependencies, "f")) {
            __classPrivateFieldSet(this, _EsbuildBuilder_dependencies, new Map(), "f");
            getDependencies().then((d) => {
                // A build happened while we were fetching deps.
                // It will fill deps for us with a fresh deps array
                if (__classPrivateFieldGet(this, _EsbuildBuilder_build, "f") instanceof Promise) {
                    return;
                }
                else if (d) {
                    __classPrivateFieldSet(this, _EsbuildBuilder_dependencies, d, "f");
                }
            }).catch((error) => console.error(error));
        }
        return deps ?? [];
    }
    async build() {
        const start = performance.now();
        const opts = __classPrivateFieldGet(this, _EsbuildBuilder_options, "f");
        try {
            await initEsbuild();
            const absWorkingDir = dntShim.Deno.cwd();
            // In dev-mode we skip identifier minification to be able to show proper
            // component names in Preact DevTools instead of single characters.
            const minifyOptions = opts.dev
                ? {
                    minifyIdentifiers: false,
                    minifySyntax: true,
                    minifyWhitespace: true,
                }
                : { minify: true };
            const bundle = await esbuild.build({
                entryPoints: opts.entrypoints,
                platform: "browser",
                target: ["chrome99", "firefox99"],
                format: "esm",
                bundle: true,
                splitting: true,
                treeShaking: true,
                sourcemap: opts.dev ? "linked" : false,
                ...minifyOptions,
                jsx: JSX_RUNTIME_MODE[opts.jsxConfig.jsx],
                jsxImportSource: opts.jsxConfig.jsxImportSource,
                absWorkingDir,
                outdir: ".",
                write: false,
                metafile: true,
                ...opts?.partialOpts,
                plugins: [
                    ...opts?.partialOpts?.plugins ?? [],
                    buildIdPlugin(opts.buildID),
                    ...denoPlugins({ configPath: opts.configPath }),
                ],
            });
            const dur = (performance.now() - start) / 1e3;
            console.info(` 📦 Fresh bundle: ${dur.toFixed(2)}s`);
            __classPrivateFieldSet(this, _EsbuildBuilder_files, new Map(), "f");
            __classPrivateFieldSet(this, _EsbuildBuilder_dependencies, new Map(), "f");
            const absWorkingDirLen = toFileUrl(absWorkingDir).href.length + 1;
            for (const file of (bundle?.outputFiles ?? [])) {
                const path = toFileUrl(file.path).href.slice(absWorkingDirLen);
                __classPrivateFieldGet(this, _EsbuildBuilder_files, "f").set(path, file.contents);
            }
            const metaOutputs = new Map(Object.entries(bundle?.metafile?.outputs ?? {}));
            for (const [path, entry] of metaOutputs.entries()) {
                const imports = entry.imports
                    .filter(({ kind }) => kind === "import-statement")
                    .map(({ path }) => path);
                __classPrivateFieldGet(this, _EsbuildBuilder_dependencies, "f").set(path, imports);
            }
        }
        finally {
            stopEsbuild();
        }
    }
}
_EsbuildBuilder_options = new WeakMap(), _EsbuildBuilder_files = new WeakMap(), _EsbuildBuilder_dependencies = new WeakMap(), _EsbuildBuilder_build = new WeakMap();
const JSX_RUNTIME_MODE = {
    "react": "transform",
    "react-jsx": "automatic",
};
async function initEsbuild() {
    // deno-lint-ignore no-deprecated-deno-api
    if (dntShim.Deno.run === undefined) {
        await esbuild.initialize({
            wasmURL: esbuildWasmURL,
            worker: false,
        });
    }
    else {
        await esbuild.initialize({});
    }
}
function stopEsbuild() {
    esbuild.stop();
}
function buildIdPlugin(buildId) {
    const file = new URL("../runtime/build_id.ts", import.meta.url).href;
    const url = new URL(file);
    let options;
    if (url.protocol === "file:") {
        const path = fromFileUrl(url);
        const filter = new RegExp(`^${regexpEscape(path)}$`);
        options = { filter, namespace: "file" };
    }
    else {
        const namespace = url.protocol.slice(0, -1);
        const path = url.href.slice(namespace.length + 1);
        const filter = new RegExp(`^${regexpEscape(path)}$`);
        options = { filter, namespace };
    }
    return {
        name: "fresh-build-id",
        setup(build) {
            build.onLoad(options, () => ({ contents: `export const BUILD_ID = "${buildId}";` }));
        },
    };
}
