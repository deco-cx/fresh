import type { SemVer } from "./types.js";
/**
 * Compare two semantic version objects.
 *
 * Returns `0` if `v1 == v2`, or `1` if `v1` is greater, or `-1` if `v2` is
 * greater.
 *
 * Sorts in ascending order if passed to `Array.sort()`,
 */
export declare function compare(s0: SemVer, s1: SemVer): 1 | 0 | -1;
/** @deprecated (will be removed after 0.200.0) Use `compare(s0: SemVer, s1: SemVer)` instead. */
export declare function compare(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): 1 | 0 | -1;
