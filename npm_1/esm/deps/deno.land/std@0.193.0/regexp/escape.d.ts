/**
 * Escapes arbitrary text for interpolation into a regexp, such that it will
 * match exactly that text and nothing else.
 *
 * @example
 * ```ts
 * import { escape } from "https://deno.land/std@$STD_VERSION/regexp/mod.ts";
 * import { assertEquals, assertMatch, assertNotMatch } from "https://deno.land/std@$STD_VERSION/testing/asserts.ts";
 *
 * const re = new RegExp(`^${escape(".")}$`, "u");
 *
 * assertEquals("^\\.$", re.source);
 * assertMatch(".", re);
 * assertNotMatch("a", re);
 * ```
 */
export declare function escape(str: string): string;
