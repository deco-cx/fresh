// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
// This module is browser compatible.
export const sep = "\\";
export const delimiter = ";";
export { windowsResolve as resolve } from "./_resolve.js";
export { windowsNormalize as normalize } from "./_normalize.js";
export { windowsIsAbsolute as isAbsolute } from "./_is_absolute.js";
export { windowsJoin as join } from "./_join.js";
export { windowsRelative as relative } from "./_relative.js";
export { windowsToNamespacedPath as toNamespacedPath } from "./_to_namespaced_path.js";
export { windowsDirname as dirname } from "./_dirname.js";
export { windowsBasename as basename } from "./_basename.js";
export { windowsExtname as extname } from "./_extname.js";
export { windowsFormat as format } from "./_format.js";
export { windowsParse as parse } from "./_parse.js";
export { windowsFromFileUrl as fromFileUrl } from "./_from_file_url.js";
export { windowsToFileUrl as toFileUrl } from "./_to_file_url.js";
