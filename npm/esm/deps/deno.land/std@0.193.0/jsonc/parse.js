// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _JSONCParser_instances, _JSONCParser_whitespace, _JSONCParser_numberEndToken, _JSONCParser_text, _JSONCParser_length, _JSONCParser_tokenized, _JSONCParser_options, _JSONCParser_getNext, _JSONCParser_tokenize, _JSONCParser_parseJsonValue, _JSONCParser_parseObject, _JSONCParser_parseArray, _JSONCParser_parseString, _JSONCParser_parseNullOrTrueOrFalseOrNumber;
/** {@linkcode parse} function for parsing
 * [JSONC](https://code.visualstudio.com/docs/languages/json#_json-with-comments)
 * (JSON with Comments) strings.
 *
 * This module is browser compatible.
 *
 * @module
 */
import { assert } from "../_util/asserts.js";
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
export function parse(text, { allowTrailingComma = true } = {}) {
    if (new.target) {
        throw new TypeError("parse is not a constructor");
    }
    return new JSONCParser(text, { allowTrailingComma }).parse();
}
var TokenType;
(function (TokenType) {
    TokenType[TokenType["BeginObject"] = 0] = "BeginObject";
    TokenType[TokenType["EndObject"] = 1] = "EndObject";
    TokenType[TokenType["BeginArray"] = 2] = "BeginArray";
    TokenType[TokenType["EndArray"] = 3] = "EndArray";
    TokenType[TokenType["NameSeparator"] = 4] = "NameSeparator";
    TokenType[TokenType["ValueSeparator"] = 5] = "ValueSeparator";
    TokenType[TokenType["NullOrTrueOrFalseOrNumber"] = 6] = "NullOrTrueOrFalseOrNumber";
    TokenType[TokenType["String"] = 7] = "String";
})(TokenType || (TokenType = {}));
const originalJSONParse = globalThis.JSON.parse;
// First tokenize and then parse the token.
class JSONCParser {
    constructor(text, options) {
        _JSONCParser_instances.add(this);
        _JSONCParser_whitespace.set(this, new Set(" \t\r\n"));
        _JSONCParser_numberEndToken.set(this, new Set([..."[]{}:,/", ...__classPrivateFieldGet(this, _JSONCParser_whitespace, "f")]));
        _JSONCParser_text.set(this, void 0);
        _JSONCParser_length.set(this, void 0);
        _JSONCParser_tokenized.set(this, void 0);
        _JSONCParser_options.set(this, void 0);
        __classPrivateFieldSet(this, _JSONCParser_text, `${text}`, "f");
        __classPrivateFieldSet(this, _JSONCParser_length, __classPrivateFieldGet(this, _JSONCParser_text, "f").length, "f");
        __classPrivateFieldSet(this, _JSONCParser_tokenized, __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_tokenize).call(this), "f");
        __classPrivateFieldSet(this, _JSONCParser_options, options, "f");
    }
    parse() {
        const token = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_getNext).call(this);
        const res = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseJsonValue).call(this, token);
        // make sure all characters have been read
        const { done, value } = __classPrivateFieldGet(this, _JSONCParser_tokenized, "f").next();
        if (!done) {
            throw new SyntaxError(buildErrorMessage(value));
        }
        return res;
    }
}
_JSONCParser_whitespace = new WeakMap(), _JSONCParser_numberEndToken = new WeakMap(), _JSONCParser_text = new WeakMap(), _JSONCParser_length = new WeakMap(), _JSONCParser_tokenized = new WeakMap(), _JSONCParser_options = new WeakMap(), _JSONCParser_instances = new WeakSet(), _JSONCParser_getNext = function _JSONCParser_getNext() {
    const { done, value } = __classPrivateFieldGet(this, _JSONCParser_tokenized, "f").next();
    if (done) {
        throw new SyntaxError("Unexpected end of JSONC input");
    }
    return value;
}, _JSONCParser_tokenize = function
/** Split the JSONC string into token units. Whitespace and comments are skipped. */
* _JSONCParser_tokenize() {
    for (let i = 0; i < __classPrivateFieldGet(this, _JSONCParser_length, "f"); i++) {
        // skip whitespace
        if (__classPrivateFieldGet(this, _JSONCParser_whitespace, "f").has(__classPrivateFieldGet(this, _JSONCParser_text, "f")[i])) {
            continue;
        }
        // skip multi line comment (`/*...*/`)
        if (__classPrivateFieldGet(this, _JSONCParser_text, "f")[i] === "/" && __classPrivateFieldGet(this, _JSONCParser_text, "f")[i + 1] === "*") {
            i += 2;
            let hasEndOfComment = false;
            for (; i < __classPrivateFieldGet(this, _JSONCParser_length, "f"); i++) { // read until find `*/`
                if (__classPrivateFieldGet(this, _JSONCParser_text, "f")[i] === "*" && __classPrivateFieldGet(this, _JSONCParser_text, "f")[i + 1] === "/") {
                    hasEndOfComment = true;
                    break;
                }
            }
            if (!hasEndOfComment) {
                throw new SyntaxError("Unexpected end of JSONC input");
            }
            i++;
            continue;
        }
        // skip single line comment (`//...`)
        if (__classPrivateFieldGet(this, _JSONCParser_text, "f")[i] === "/" && __classPrivateFieldGet(this, _JSONCParser_text, "f")[i + 1] === "/") {
            i += 2;
            for (; i < __classPrivateFieldGet(this, _JSONCParser_length, "f"); i++) { // read until find `\n` or `\r`
                if (__classPrivateFieldGet(this, _JSONCParser_text, "f")[i] === "\n" || __classPrivateFieldGet(this, _JSONCParser_text, "f")[i] === "\r") {
                    break;
                }
            }
            continue;
        }
        switch (__classPrivateFieldGet(this, _JSONCParser_text, "f")[i]) {
            case "{":
                yield { type: TokenType.BeginObject, position: i };
                break;
            case "}":
                yield { type: TokenType.EndObject, position: i };
                break;
            case "[":
                yield { type: TokenType.BeginArray, position: i };
                break;
            case "]":
                yield { type: TokenType.EndArray, position: i };
                break;
            case ":":
                yield { type: TokenType.NameSeparator, position: i };
                break;
            case ",":
                yield { type: TokenType.ValueSeparator, position: i };
                break;
            case '"': { // parse string token
                const startIndex = i;
                // Need to handle consecutive backslashes correctly
                // '"\\""' => '"'
                // '"\\\\"' => '\\'
                // '"\\\\\\""' => '\\"'
                // '"\\\\\\\\"' => '\\\\'
                let shouldEscapeNext = false;
                i++;
                for (; i < __classPrivateFieldGet(this, _JSONCParser_length, "f"); i++) { // read until find `"`
                    if (__classPrivateFieldGet(this, _JSONCParser_text, "f")[i] === '"' && !shouldEscapeNext) {
                        break;
                    }
                    shouldEscapeNext = __classPrivateFieldGet(this, _JSONCParser_text, "f")[i] === "\\" && !shouldEscapeNext;
                }
                yield {
                    type: TokenType.String,
                    sourceText: __classPrivateFieldGet(this, _JSONCParser_text, "f").substring(startIndex, i + 1),
                    position: startIndex,
                };
                break;
            }
            default: { // parse null, true, false or number token
                const startIndex = i;
                for (; i < __classPrivateFieldGet(this, _JSONCParser_length, "f"); i++) { // read until find numberEndToken
                    if (__classPrivateFieldGet(this, _JSONCParser_numberEndToken, "f").has(__classPrivateFieldGet(this, _JSONCParser_text, "f")[i])) {
                        break;
                    }
                }
                i--;
                yield {
                    type: TokenType.NullOrTrueOrFalseOrNumber,
                    sourceText: __classPrivateFieldGet(this, _JSONCParser_text, "f").substring(startIndex, i + 1),
                    position: startIndex,
                };
            }
        }
    }
}, _JSONCParser_parseJsonValue = function _JSONCParser_parseJsonValue(value) {
    switch (value.type) {
        case TokenType.BeginObject:
            return __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseObject).call(this);
        case TokenType.BeginArray:
            return __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseArray).call(this);
        case TokenType.NullOrTrueOrFalseOrNumber:
            return __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseNullOrTrueOrFalseOrNumber).call(this, value);
        case TokenType.String:
            return __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseString).call(this, value);
        default:
            throw new SyntaxError(buildErrorMessage(value));
    }
}, _JSONCParser_parseObject = function _JSONCParser_parseObject() {
    const target = {};
    //   ┌─token1
    // { }
    //      ┌─────────────token1
    //      │   ┌─────────token2
    //      │   │   ┌─────token3
    //      │   │   │   ┌─token4
    //  { "key" : value }
    //      ┌───────────────token1
    //      │   ┌───────────token2
    //      │   │   ┌───────token3
    //      │   │   │   ┌───token4
    //      │   │   │   │ ┌─token1
    //  { "key" : value , }
    //      ┌─────────────────────────────token1
    //      │   ┌─────────────────────────token2
    //      │   │   ┌─────────────────────token3
    //      │   │   │   ┌─────────────────token4
    //      │   │   │   │   ┌─────────────token1
    //      │   │   │   │   │   ┌─────────token2
    //      │   │   │   │   │   │   ┌─────token3
    //      │   │   │   │   │   │   │   ┌─token4
    //  { "key" : value , "key" : value }
    for (let isFirst = true;; isFirst = false) {
        const token1 = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_getNext).call(this);
        if ((isFirst || __classPrivateFieldGet(this, _JSONCParser_options, "f").allowTrailingComma) &&
            token1.type === TokenType.EndObject) {
            return target;
        }
        if (token1.type !== TokenType.String) {
            throw new SyntaxError(buildErrorMessage(token1));
        }
        const key = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseString).call(this, token1);
        const token2 = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_getNext).call(this);
        if (token2.type !== TokenType.NameSeparator) {
            throw new SyntaxError(buildErrorMessage(token2));
        }
        const token3 = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_getNext).call(this);
        Object.defineProperty(target, key, {
            value: __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseJsonValue).call(this, token3),
            writable: true,
            enumerable: true,
            configurable: true,
        });
        const token4 = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_getNext).call(this);
        if (token4.type === TokenType.EndObject) {
            return target;
        }
        if (token4.type !== TokenType.ValueSeparator) {
            throw new SyntaxError(buildErrorMessage(token4));
        }
    }
}, _JSONCParser_parseArray = function _JSONCParser_parseArray() {
    const target = [];
    //   ┌─token1
    // [ ]
    //      ┌─────────────token1
    //      │   ┌─────────token2
    //  [ value ]
    //      ┌───────token1
    //      │   ┌───token2
    //      │   │ ┌─token1
    //  [ value , ]
    //      ┌─────────────token1
    //      │   ┌─────────token2
    //      │   │   ┌─────token1
    //      │   │   │   ┌─token2
    //  [ value , value ]
    for (let isFirst = true;; isFirst = false) {
        const token1 = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_getNext).call(this);
        if ((isFirst || __classPrivateFieldGet(this, _JSONCParser_options, "f").allowTrailingComma) &&
            token1.type === TokenType.EndArray) {
            return target;
        }
        target.push(__classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_parseJsonValue).call(this, token1));
        const token2 = __classPrivateFieldGet(this, _JSONCParser_instances, "m", _JSONCParser_getNext).call(this);
        if (token2.type === TokenType.EndArray) {
            return target;
        }
        if (token2.type !== TokenType.ValueSeparator) {
            throw new SyntaxError(buildErrorMessage(token2));
        }
    }
}, _JSONCParser_parseString = function _JSONCParser_parseString(value) {
    let parsed;
    try {
        // Use JSON.parse to handle `\u0000` etc. correctly.
        parsed = originalJSONParse(value.sourceText);
    }
    catch {
        throw new SyntaxError(buildErrorMessage(value));
    }
    assert(typeof parsed === "string");
    return parsed;
}, _JSONCParser_parseNullOrTrueOrFalseOrNumber = function _JSONCParser_parseNullOrTrueOrFalseOrNumber(value) {
    if (value.sourceText === "null") {
        return null;
    }
    if (value.sourceText === "true") {
        return true;
    }
    if (value.sourceText === "false") {
        return false;
    }
    let parsed;
    try {
        // Use JSON.parse to handle `+100`, `Infinity` etc. correctly.
        parsed = originalJSONParse(value.sourceText);
    }
    catch {
        throw new SyntaxError(buildErrorMessage(value));
    }
    assert(typeof parsed === "number");
    return parsed;
};
function buildErrorMessage({ type, sourceText, position }) {
    let token = "";
    switch (type) {
        case TokenType.BeginObject:
            token = "{";
            break;
        case TokenType.EndObject:
            token = "}";
            break;
        case TokenType.BeginArray:
            token = "[";
            break;
        case TokenType.EndArray:
            token = "]";
            break;
        case TokenType.NameSeparator:
            token = ":";
            break;
        case TokenType.ValueSeparator:
            token = ",";
            break;
        case TokenType.NullOrTrueOrFalseOrNumber:
        case TokenType.String:
            // Truncate the string so that it is within 30 lengths.
            token = 30 < sourceText.length
                ? `${sourceText.slice(0, 30)}...`
                : sourceText;
            break;
        default:
            throw new Error("unreachable");
    }
    return `Unexpected token ${token} in JSONC at position ${position}`;
}
