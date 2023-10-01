import type { FormatInputPathObject } from "./_interface.ts";
/**
 * Generate a path from `FormatInputPathObject` object.
 * @param pathObject with path
 */
export declare function posixFormat(pathObject: FormatInputPathObject): string;
/**
 * Generate a path from `FormatInputPathObject` object.
 * @param pathObject with path
 */
export declare function windowsFormat(pathObject: FormatInputPathObject): string;
