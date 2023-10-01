import { compare } from "./compare.ts";
export function lt(s0, s1, options) {
    return compare(s0, s1, options) < 0;
}
