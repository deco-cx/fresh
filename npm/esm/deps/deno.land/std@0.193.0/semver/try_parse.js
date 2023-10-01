import { parse } from "./parse.js";
/**
 * Returns the parsed version, or undefined if it's not valid.
 * @param version The version string to parse
 * @returns A valid SemVer or `undefined`
 */
export function tryParse(version) {
    if (version == null) {
        return undefined;
    }
    try {
        return parse(version);
    }
    catch {
        return undefined;
    }
}
