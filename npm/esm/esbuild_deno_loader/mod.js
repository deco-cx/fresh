import { denoResolverPlugin, } from "./src/plugin_deno_resolver.js";
export { denoResolverPlugin, };
import { DEFAULT_LOADER, denoLoaderPlugin, } from "./src/plugin_deno_loader.js";
export { DEFAULT_LOADER, denoLoaderPlugin };
export { esbuildResolutionToURL, urlToEsbuildResolution, } from "./src/shared.js";
export function denoPlugins(opts = {}) {
    return [
        denoResolverPlugin(opts),
        denoLoaderPlugin(opts),
    ];
}
