// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { isWindows } from "./_os.ts";
import { posixIsAbsolute, windowsIsAbsolute } from "./_is_absolute.ts";
/**
 * Verifies whether provided path is absolute
 * @param path to be verified as absolute
 */
export function isAbsolute(path) {
    return isWindows ? windowsIsAbsolute(path) : posixIsAbsolute(path);
}
