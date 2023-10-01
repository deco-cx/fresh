// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
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
var _AuthTokens_tokens;
export function splitLast(value, delimiter) {
    const split = value.split(delimiter);
    return [split.slice(0, -1).join(delimiter)].concat(split.slice(-1));
}
function tokenAsValue(authToken) {
    return authToken.type === "basic"
        ? `Basic ${authToken.username}:${authToken.password}`
        : `Bearer ${authToken.token}`;
}
export class AuthTokens {
    constructor(tokensStr = "") {
        _AuthTokens_tokens.set(this, void 0);
        const tokens = [];
        for (const tokenStr of tokensStr.split(";").filter((s) => s.length > 0)) {
            if (tokensStr.includes("@")) {
                const [host, token] = splitLast(tokenStr, "@");
                if (token.includes(":")) {
                    const [password, username] = splitLast(token, ":");
                    tokens.push({ type: "basic", host, username, password });
                }
                else {
                    tokens.push({ type: "bearer", host, token });
                }
            }
            else {
                console.error("Badly formed auth token discarded.");
            }
        }
        __classPrivateFieldSet(this, _AuthTokens_tokens, tokens, "f");
    }
    get(specifier) {
        for (const token of __classPrivateFieldGet(this, _AuthTokens_tokens, "f")) {
            if (token.host.endsWith(specifier.host)) {
                return tokenAsValue(token);
            }
        }
    }
}
_AuthTokens_tokens = new WeakMap();
