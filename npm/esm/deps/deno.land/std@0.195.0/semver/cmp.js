import { eq } from "./eq.ts";
import { neq } from "./neq.ts";
import { gte } from "./gte.ts";
import { gt } from "./gt.ts";
import { lt } from "./lt.ts";
import { lte } from "./lte.ts";
export function cmp(s0, operator, s1, options) {
    switch (operator) {
        case "":
        case "=":
        case "==":
        case "===":
            return eq(s0, s1, options);
        case "!=":
        case "!==":
            return neq(s0, s1, options);
        case ">":
            return gt(s0, s1, options);
        case ">=":
            return gte(s0, s1, options);
        case "<":
            return lt(s0, s1, options);
        case "<=":
            return lte(s0, s1, options);
        default:
            throw new TypeError(`Invalid operator: ${operator}`);
    }
}
