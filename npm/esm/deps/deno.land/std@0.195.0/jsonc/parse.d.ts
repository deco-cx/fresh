import type { JsonValue } from "../json/common.ts";
export type { JsonValue } from "../json/common.ts";
export interface ParseOptions {
    /** Allow trailing commas at the end of arrays and objects.
     *
     * @default {true}
     */
    allowTrailingComma?: boolean;
}
/**
 * Converts a JSON with Comments (JSONC) string into an object.
 * If a syntax error is found, throw a SyntaxError.
 *
 * @example
 *
 * ```ts
 * import * as JSONC from "https://deno.land/std@$STD_VERSION/jsonc/mod.ts";
 *
 * console.log(JSONC.parse('{"foo": "bar", } // comment')); //=> { foo: "bar" }
 * console.log(JSONC.parse('{"foo": "bar", } /* comment *\/')); //=> { foo: "bar" }
 * console.log(JSONC.parse('{"foo": "bar" } // comment', {
 *   allowTrailingComma: false,
 * })); //=> { foo: "bar" }
 * ```
 *
 * @param text A valid JSONC string.
 */
export declare function parse(text: string, { allowTrailingComma }?: ParseOptions): JsonValue;
