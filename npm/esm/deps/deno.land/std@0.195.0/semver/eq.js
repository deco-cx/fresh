// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { compare } from "./compare.ts";
export function eq(s0, s1, options) {
    return compare(s0, s1, options) === 0;
}
