import { ParsedPath } from "./_interface.js";
/**
 * Return a `ParsedPath` object of the `path`.
 * @param path to process
 */
export declare function posixParse(path: string): ParsedPath;
/**
 * Return a `ParsedPath` object of the `path`.
 * @param path to process
 */
export declare function windowsParse(path: string): ParsedPath;
