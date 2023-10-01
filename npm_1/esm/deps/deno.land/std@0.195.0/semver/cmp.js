import { eq } from "./eq.js";
import { neq } from "./neq.js";
import { gte } from "./gte.js";
import { gt } from "./gt.js";
import { lt } from "./lt.js";
import { lte } from "./lte.js";
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
