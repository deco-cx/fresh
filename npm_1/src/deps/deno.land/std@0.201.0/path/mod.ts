// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// Copyright the Browserify authors. MIT License.
// Ported mostly from https://github.com/browserify/path-browserify/
// This module is browser compatible.

/**
 * Utilities for working with OS-specific file paths.
 *
 * Codes in the examples uses POSIX path but it automatically use Windows path
 * on Windows. Use methods under `posix` or `win32` object instead to handle non
 * platform specific path like:
 * ```ts
 * import { posix, win32 } from "https://deno.land/std@$STD_VERSION/path/mod.ts";
 * const p1 = posix.fromFileUrl("file:///home/foo");
 * const p2 = win32.fromFileUrl("file:///home/foo");
 * console.log(p1); // "/home/foo"
 * console.log(p2); // "\\home\\foo"
 * ```
 *
 * This module is browser compatible.
 *
 * @module
 */

import { isWindows } from "./_os.js";
import * as _win32 from "./win32.js";
import * as _posix from "./posix.js";

export const win32 = _win32;
export const posix = _posix;
export const delimiter = isWindows ? win32.delimiter : posix.delimiter;

export * from "./basename.js";
export * from "./dirname.js";
export * from "./extname.js";
export * from "./format.js";
export * from "./from_file_url.js";
export * from "./is_absolute.js";
export * from "./join.js";
export * from "./normalize.js";
export * from "./parse.js";
export * from "./relative.js";
export * from "./resolve.js";
export * from "./to_file_url.js";
export * from "./to_namespaced_path.js";
export * from "./common.js";
export * from "./separator.js";
export * from "./_interface.js";
export * from "./glob.js";
