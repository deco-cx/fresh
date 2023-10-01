// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { parseRange } from "./parse_range.js";
/**
 * A tries to parse a valid SemVerRange string or returns undefined
 * @param range The range string
 * @returns A SemVerRange object if valid otherwise `undefined`
 */
export function tryParseRange(range) {
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return parseRange(range);
    }
    catch {
        return undefined;
    }
}
