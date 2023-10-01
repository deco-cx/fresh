import { compare } from "./compare.ts";
export function neq(s0, s1, options) {
    return compare(s0, s1, options) !== 0;
}
