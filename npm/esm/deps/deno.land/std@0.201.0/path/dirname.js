// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { isWindows } from "./_os.js";
import { posixDirname, windowsDirname } from "./_dirname.js";
/**
 * Return the directory path of a `path`.
 * @param path - path to extract the directory from.
 */
export function dirname(path) {
    return isWindows ? windowsDirname(path) : posixDirname(path);
}
