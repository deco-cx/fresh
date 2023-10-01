import type { SemVer } from "./types.js";
/** Less than comparison */
export declare function lt(s0: SemVer, s1: SemVer): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `lt(s0: SemVer, s1: SemVer)` instead.
 *
 * Less than comparison */
export declare function lt(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): boolean;
