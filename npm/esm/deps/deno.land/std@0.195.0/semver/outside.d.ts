import type { SemVer, SemVerRange } from "./types.ts";
/**
 * Returns true if the version is outside the bounds of the range in either the
 * high or low direction. The hilo argument must be either the string '>' or
 * '<'. (This is the function called by {@linkcode gtr} and {@linkcode ltr}.)
 * @param version The version to compare to the range
 * @param range The range of possible versions
 * @param hilo The operator for the comparison or both if undefined.
 * @returns True if the version is outside of the range based on the operator
 */
export declare function outside(version: SemVer, range: SemVerRange, hilo?: ">" | "<"): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `outside(version: SemVer, range: SemVerRange, hilo?: ">" | "<",)` instead.
 *
 * Returns true if the version is outside the bounds of the range in either the
 * high or low direction. The hilo argument must be either the string '>' or
 * '<'. (This is the function called by {@linkcode gtr} and {@linkcode ltr}.)
 * @param version The version to compare to the range
 * @param range The range of possible versions
 * @param hilo The operator for the comparison or both if undefined.
 * @returns True if the version is outside of the range based on the operator
 */
export declare function outside(version: string | SemVer, range: string | SemVerRange, hilo?: ">" | "<", options?: {
    includePrerelease: boolean;
}): boolean;
