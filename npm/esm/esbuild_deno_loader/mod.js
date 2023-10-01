import { denoResolverPlugin, } from "./src/plugin_deno_resolver.ts";
export { denoResolverPlugin, };
import { DEFAULT_LOADER, denoLoaderPlugin, } from "./src/plugin_deno_loader.ts";
export { DEFAULT_LOADER, denoLoaderPlugin };
export { esbuildResolutionToURL, urlToEsbuildResolution, } from "./src/shared.ts";
export function denoPlugins(opts = {}) {
    return [
        denoResolverPlugin(opts),
        denoLoaderPlugin(opts),
    ];
}
