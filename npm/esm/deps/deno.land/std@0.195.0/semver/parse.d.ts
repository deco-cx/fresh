import { SemVer } from "./types.ts";
/**
 * Attempt to parse a string as a semantic version, returning either a `SemVer`
 * object or throws a TypeError.
 * @param version The version string to parse
 * @returns A valid SemVer
 */
export declare function parse(version: string | SemVer): SemVer;
/** @deprecated (will be removed after 0.200.0) Use parse(version: string | SemVer) instead. */
export declare function parse(version: string | SemVer | null, options?: {
    includePrerelease: boolean;
}): SemVer;
