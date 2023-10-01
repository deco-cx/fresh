import type { SemVer, SemVerRange } from "./types.ts";
/**
 * Returns the highest version in the list that satisfies the range, or `undefined`
 * if none of them do.
 * @param versions The versions to check.
 * @param range The range of possible versions to compare to.
 * @returns The highest version in versions that satisfies the range.
 */
export declare function maxSatisfying(versions: SemVer[], range: SemVerRange): SemVer | undefined;
/**
 * @deprecated (will be removed after 0.200.0) Use `maxSatisfying(versions: SemVer[], range: SemVerRange)` instead.
 */
export declare function maxSatisfying<T extends string | SemVer>(versions: readonly T[], range: string | SemVerRange, options?: {
    includePrerelease: boolean;
}): T | undefined;
