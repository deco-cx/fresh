import { VNode } from "preact";
export declare const INTERNAL_PREFIX = "/_frsh";
export declare const ASSET_CACHE_BUST_KEY = "__frsh_c";
export declare const IS_BROWSER: boolean;
/**
 * Create a "locked" asset path. This differs from a plain path in that it is
 * specific to the current version of the application, and as such can be safely
 * served with a very long cache lifetime (1 year).
 */
export declare function asset(path: string): string;
/** Apply the `asset` function to urls in a `srcset` attribute. */
export declare function assetSrcSet(srcset: string): string;
export declare function assetHashingHook(vnode: VNode<{
    src?: string;
    srcset?: string;
    ["data-fresh-disable-lock"]?: boolean;
}>): void;
