import { sort } from "./sort.ts";
import { testRange } from "./test_range.ts";
import { parseRange } from "./parse_range.ts";
import { parse } from "./parse.ts";
export function maxSatisfying(versions, range, options) {
    const r = typeof range === "string" ? parseRange(range) : range;
    const satisfying = versions.filter((v) => testRange(typeof v === "string" ? parse(v, options) : v, r));
    const sorted = sort(satisfying);
    return sorted.pop();
}
