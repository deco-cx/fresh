import type { SemVer, SemVerRange } from "./types.ts";
/**
 * The maximum valid SemVer for a given range or INVALID
 * @param range The range to calculate the max for
 * @returns A valid SemVer or INVALID
 */
export declare function rangeMax(range: SemVerRange): SemVer | undefined;
