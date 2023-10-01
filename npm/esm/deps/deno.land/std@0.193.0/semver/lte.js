import { compare } from "./compare.js";
export function lte(s0, s1, options) {
    return compare(s0, s1, options) <= 0;
}
