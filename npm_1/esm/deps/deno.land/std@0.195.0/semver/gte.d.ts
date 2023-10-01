import type { SemVer } from "./types.js";
/** Greater than or equal to comparison */
export declare function gte(s0: SemVer, s1: SemVer): boolean;
/** @deprecated (will be removed after 0.200.0) Use `gte(s0: SemVer, s1: SemVer)` instead.
 *
 * Greater than or equal to comparison */
export declare function gte(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): boolean;
