import { compare } from "./compare.ts";
export function gte(s0, s1, options) {
    return compare(s0, s1, options) >= 0;
}
