import type { SemVer } from "./types.ts";
/**
 * Compare two semantic version objects including build metadata.
 *
 * Returns `0` if `v1 == v2`, or `1` if `v1` is greater, or `-1` if `v2` is
 * greater.
 *
 * Sorts in ascending order if passed to `Array.sort()`,
 * @param s0
 * @param s1
 * @returns
 */
export declare function compareBuild(s0: SemVer, s1: SemVer): 1 | 0 | -1;
/**
 * @deprecated (will be removed after 0.200.0) Use `compare(s0: SemVer, s1: SemVer)` instead.
 */
export declare function compareBuild(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): 1 | 0 | -1;
