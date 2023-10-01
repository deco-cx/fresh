import { SemVerRange } from "./types.js";
/**
 * A tries to parse a valid SemVerRange string or returns undefined
 * @param range The range string
 * @returns A SemVerRange object if valid otherwise `undefined`
 */
export declare function tryParseRange(range: string): SemVerRange | undefined;
