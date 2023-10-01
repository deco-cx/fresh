import { SemVer } from "./types.ts";
/**
 * Returns the parsed version, or undefined if it's not valid.
 * @param version The version string to parse
 * @returns A valid SemVer or `undefined`
 */
export declare function tryParse(version?: string): SemVer | undefined;
