import type { SemVer } from "./types.js";
/** Sorts a list of semantic versions in descending order. */
export declare function rsort(list: SemVer[]): SemVer[];
/** @deprecated (will be removed after 0.200.0) Use `sort(list: SemVer[])` instead. */
export declare function rsort(list: (string | SemVer)[], options?: {
    includePrerelease: boolean;
}): (SemVer | string)[];
