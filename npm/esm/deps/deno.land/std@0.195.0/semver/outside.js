// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { gt } from "./gt.ts";
import { gte } from "./gte.ts";
import { lte } from "./lte.ts";
import { lt } from "./lt.ts";
import { ALL, ANY } from "./constants.ts";
import { parse } from "./parse.ts";
import { testRange } from "./test_range.ts";
import { parseRange } from "./parse_range.ts";
export function outside(v, r, hilo, options) {
    const version = parse(v);
    const range = typeof r === "string" ? parseRange(r) : r;
    if (!hilo) {
        return outside(version, range, ">", options) ||
            outside(version, range, "<", options);
    }
    const [gtfn, ltefn, ltfn, comp, ecomp] = (() => {
        switch (hilo) {
            case ">":
                return [gt, lte, lt, ">", ">="];
            case "<":
                return [lt, gte, gt, "<", "<="];
        }
    })();
    if (testRange(version, range)) {
        return false;
    }
    for (const comparators of range.ranges) {
        let high = undefined;
        let low = undefined;
        for (let comparator of comparators) {
            if (comparator.semver === ANY) {
                comparator = ALL;
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            }
            else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        }
        if (!high || !low)
            return true;
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) &&
            ltefn(version, low.semver, options)) {
            return false;
        }
        else if (low.operator === ecomp && ltfn(version, low.semver, options)) {
            return false;
        }
    }
    return true;
}
