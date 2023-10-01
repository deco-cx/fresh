// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { SemVer } from "./types.js";
import { parse } from "./parse.js";

/**
 * Returns the parsed version, or undefined if it's not valid.
 * @param version The version string to parse
 * @returns A valid SemVer or `undefined`
 */
export function tryParse(version?: string): SemVer | undefined {
  if (version == null) {
    return undefined;
  }
  try {
    return parse(version);
  } catch {
    return undefined;
  }
}
