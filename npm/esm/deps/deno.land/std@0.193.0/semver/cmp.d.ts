import type { Operator, SemVer } from "./types.ts";
/**
 * Do a comparison of two semantic version objects based on the given operator
 * @param s0 The left side of the comparison
 * @param operator The operator to use for the comparison
 * @param s1 The right side of the comparison
 * @returns True or false based on the operator
 */
export declare function cmp(s0: SemVer, operator: Operator, s1: SemVer): boolean;
/** @deprecated (will be removed after 0.200.0) Use `cmp(s0: SemVer, operator: Operator, s1: SemVer)` instead. */
export declare function cmp(s0: string | SemVer, operator: Operator, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): boolean;
