import type { SemVer, SemVerRange } from "./types.ts";
/** Checks to see if the version is greater than all possible versions of the range. */
export declare function gtr(version: SemVer, range: SemVerRange): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `gtr(version: SemVer, range: SemVerRange)` instead.
 *
 * Checks to see if the version is greater than all possible versions of the range. */
export declare function gtr(version: string | SemVer, range: string | SemVerRange, options?: {
    includePrerelease: boolean;
}): boolean;
