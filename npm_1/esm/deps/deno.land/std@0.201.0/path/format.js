// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { isWindows } from "./_os.js";
import { posixFormat, windowsFormat } from "./_format.js";
/**
 * Generate a path from `FormatInputPathObject` object.
 * @param pathObject with path
 */
export function format(pathObject) {
    return isWindows ? windowsFormat(pathObject) : posixFormat(pathObject);
}
