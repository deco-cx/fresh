import type { SemVer } from "./types.ts";
/** Sorts a list of semantic versions in ascending order. */
export declare function sort(list: SemVer[]): SemVer[];
/** @deprecated (will be removed after 0.200.0) Use `sort(list: SemVer[])` instead. */
export declare function sort(list: (string | SemVer)[], options?: {
    includePrerelease: boolean;
}): (SemVer | string)[];
