import type { ReleaseType, SemVer } from "./types.js";
/** Returns difference between two versions by the release type, or
 * `undefined` if the versions are the same. */
export declare function difference(s0: SemVer, s1: SemVer): ReleaseType | undefined;
/**
 * @deprecated (will be removed after 0.200.0) Use `difference(s0: SemVer, s1: SemVer)` instead.
 *
 * Returns difference between two versions by the release type, or
 * `undefined` if the versions are the same. */
export declare function difference(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): ReleaseType | undefined;
