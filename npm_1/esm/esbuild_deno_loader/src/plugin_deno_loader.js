import { join } from "../deps.js";
import { NativeLoader } from "./loader_native.js";
import { PortableLoader } from "./loader_portable.js";
import { IN_NODE_MODULES, IN_NODE_MODULES_RESOLVED, } from "./plugin_deno_resolver.js";
import { esbuildResolutionToURL, urlToEsbuildResolution, } from "./shared.js";
const LOADERS = ["native", "portable"];
/** The default loader to use. */
export const DEFAULT_LOADER = await Deno.permissions.query({ name: "run" })
    .then((res) => res.state !== "granted")
    ? "portable"
    : "native";
/**
 * The Deno loader plugin for esbuild. This plugin will load fully qualified
 * `file`, `http`, `https`, and `data` URLs.
 *
 * **Note** that this plugin does not do relative->absolute specifier
 * resolution, or import map resolution. You must use the `denoResolverPlugin`
 * _before_ the `denoLoaderPlugin` to do that.
 *
 * This plugin can be backed by two different loaders, the `native` loader and
 * the `portable` loader.
 *
 * ### Native Loader
 *
 * The native loader shells out to the Deno executable under the hood to load
 * files. Requires `--allow-read` and `--allow-run`. In this mode the download
 * cache is shared with the Deno executable. This mode respects deno.lock,
 * DENO_DIR, DENO_AUTH_TOKENS, and all similar loading configuration. Files are
 * cached on disk in the same Deno cache as the Deno executable, and will not be
 * re-downloaded on subsequent builds.
 *
 * NPM specifiers can be used in the native loader without requiring a local
 * `node_modules` directory. NPM packages are resolved, downloaded, cached, and
 * loaded in the same way as the Deno executable does.
 *
 * ### Portable Loader
 *
 * The portable loader does module downloading and caching with only Web APIs.
 * Requires `--allow-read` and/or `--allow-net`. This mode does not respect
 * deno.lock, DENO_DIR, DENO_AUTH_TOKENS, or any other loading configuration. It
 * does not cache downloaded files. It will re-download files on every build.
 *
 * NPM specifiers can be used in the portable loader, but require a local
 * `node_modules` directory. The `node_modules` directory must be created prior
 * using Deno's `--node-modules-dir` flag.
 */
export function denoLoaderPlugin(options = {}) {
    const loader = options.loader ?? DEFAULT_LOADER;
    if (LOADERS.indexOf(loader) === -1) {
        throw new Error(`Invalid loader: ${loader}`);
    }
    return {
        name: "deno-loader",
        setup(build) {
            const cwd = build.initialOptions.absWorkingDir ?? Deno.cwd();
            let nodeModulesDir = null;
            if (options.nodeModulesDir) {
                nodeModulesDir = join(cwd, "node_modules");
            }
            let loaderImpl;
            const packageIdMapping = new Map();
            build.onStart(function onStart() {
                packageIdMapping.clear();
                switch (loader) {
                    case "native":
                        loaderImpl = new NativeLoader({
                            infoOptions: {
                                cwd,
                                config: options.configPath,
                                importMap: options.importMapURL,
                                // TODO(lucacasonato): https://github.com/denoland/deno/issues/18159
                                // lock: options.lockPath,
                                nodeModulesDir: options.nodeModulesDir,
                            },
                        });
                        break;
                    case "portable":
                        loaderImpl = new PortableLoader();
                }
            });
            async function resolveInNodeModules(path, packageId, kind, resolveDir, importer, namespace) {
                const result = await build.resolve(path, {
                    kind,
                    resolveDir,
                    importer,
                    namespace,
                    pluginData: IN_NODE_MODULES_RESOLVED,
                });
                result.pluginData = IN_NODE_MODULES;
                packageIdMapping.set(result.path, packageId);
                return result;
            }
            async function onResolve(args) {
                if (args.namespace === "file" && args.pluginData === IN_NODE_MODULES) {
                    if (nodeModulesDir) {
                        const result = await build.resolve(args.path, {
                            kind: args.kind,
                            resolveDir: args.resolveDir,
                            importer: args.importer,
                            namespace: args.namespace,
                            pluginData: IN_NODE_MODULES_RESOLVED,
                        });
                        result.pluginData = IN_NODE_MODULES;
                        return result;
                    }
                    else if (loaderImpl.nodeModulesDirForPackage &&
                        loaderImpl.packageIdFromNameInPackage) {
                        const parentPackageId = packageIdMapping.get(args.importer);
                        if (!parentPackageId) {
                            throw new Error(`Could not find package ID for importer: ${args.importer}`);
                        }
                        if (args.path.startsWith(".")) {
                            return resolveInNodeModules(args.path, parentPackageId, args.kind, args.resolveDir, args.importer, args.namespace);
                        }
                        else {
                            let packageName;
                            let pathParts;
                            if (args.path.startsWith("@")) {
                                const [scope, name, ...rest] = args.path.split("/");
                                packageName = `${scope}/${name}`;
                                pathParts = rest;
                            }
                            else {
                                const [name, ...rest] = args.path.split("/");
                                packageName = name;
                                pathParts = rest;
                            }
                            const packageId = loaderImpl.packageIdFromNameInPackage(packageName, parentPackageId);
                            const resolveDir = await loaderImpl.nodeModulesDirForPackage(packageId);
                            const path = [packageName, ...pathParts].join("/");
                            return resolveInNodeModules(path, parentPackageId, args.kind, resolveDir, args.importer, args.namespace);
                        }
                    }
                    else {
                        throw new Error(`To use "npm:" specifiers, you must specify "nodeModulesDir: true", or use "loader: native".`);
                    }
                }
                const specifier = esbuildResolutionToURL(args);
                // Once we have an absolute path, let the loader resolver figure out
                // what to do with it.
                const res = await loaderImpl.resolve(specifier);
                switch (res.kind) {
                    case "esm": {
                        const { specifier } = res;
                        return urlToEsbuildResolution(specifier);
                    }
                    case "npm": {
                        let resolveDir;
                        if (nodeModulesDir) {
                            resolveDir = nodeModulesDir;
                        }
                        else if (loaderImpl.nodeModulesDirForPackage) {
                            resolveDir = await loaderImpl.nodeModulesDirForPackage(res.packageId);
                        }
                        else {
                            throw new Error(`To use "npm:" specifiers, you must specify "nodeModulesDir: true", or use "loader: native".`);
                        }
                        const path = `${res.packageName}${res.path ?? ""}`;
                        return resolveInNodeModules(path, res.packageId, args.kind, resolveDir, args.importer, args.namespace);
                    }
                    case "node": {
                        return {
                            path: res.path,
                            external: true,
                        };
                    }
                }
            }
            build.onResolve({ filter: /.*/, namespace: "file" }, onResolve);
            build.onResolve({ filter: /.*/, namespace: "http" }, onResolve);
            build.onResolve({ filter: /.*/, namespace: "https" }, onResolve);
            build.onResolve({ filter: /.*/, namespace: "data" }, onResolve);
            build.onResolve({ filter: /.*/, namespace: "npm" }, onResolve);
            build.onResolve({ filter: /.*/, namespace: "node" }, onResolve);
            async function onLoad(args) {
                if (args.namespace === "file" && args.pluginData === IN_NODE_MODULES) {
                    const contents = await Deno.readFile(args.path);
                    return { loader: "js", contents };
                }
                const specifier = esbuildResolutionToURL(args);
                return loaderImpl.loadEsm(specifier);
            }
            // TODO(lucacasonato): once https://github.com/evanw/esbuild/pull/2968 is fixed, remove the catch all "file" handler
            build.onLoad({ filter: /.*/, namespace: "file" }, onLoad);
            build.onLoad({ filter: /.*/, namespace: "http" }, onLoad);
            build.onLoad({ filter: /.*/, namespace: "https" }, onLoad);
            build.onLoad({ filter: /.*/, namespace: "data" }, onLoad);
        },
    };
}
