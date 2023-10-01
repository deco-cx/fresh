// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// Copyright the Browserify authors. MIT License.
// Ported from https://github.com/browserify/path-browserify/
// This module is browser compatible.
export const sep = "/";
export const delimiter = ":";
export { posixResolve as resolve } from "./_resolve.js";
export { posixNormalize as normalize } from "./_normalize.js";
export { posixIsAbsolute as isAbsolute } from "./_is_absolute.js";
export { posixJoin as join } from "./_join.js";
export { posixRelative as relative } from "./_relative.js";
export { posixToNamespacedPath as toNamespacedPath } from "./_to_namespaced_path.js";
export { posixDirname as dirname } from "./_dirname.js";
export { posixBasename as basename } from "./_basename.js";
export { posixExtname as extname } from "./_extname.js";
export { posixFormat as format } from "./_format.js";
export { posixParse as parse } from "./_parse.js";
export { posixFromFileUrl as fromFileUrl } from "./_from_file_url.js";
export { posixToFileUrl as toFileUrl } from "./_to_file_url.js";
