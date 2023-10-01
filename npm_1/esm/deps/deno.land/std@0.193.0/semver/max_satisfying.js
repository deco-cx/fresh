import { sort } from "./sort.js";
import { testRange } from "./test_range.js";
import { parseRange } from "./parse_range.js";
import { parse } from "./parse.js";
export function maxSatisfying(versions, range, options) {
    const r = typeof range === "string" ? parseRange(range) : range;
    const satisfying = versions.filter((v) => testRange(typeof v === "string" ? parse(v, options) : v, r));
    const sorted = sort(satisfying);
    return sorted.pop();
}
