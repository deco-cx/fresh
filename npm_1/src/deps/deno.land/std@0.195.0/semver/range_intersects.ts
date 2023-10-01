// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { comparatorIntersects } from "./comparator_intersects.js";
import { parseRange } from "./parse_range.js";
import type { SemVerComparator, SemVerRange } from "./types.js";

function rangesSatisfiable(ranges: SemVerRange[]): boolean {
  return ranges.every((r) => {
    // For each OR at least one AND must be satisfiable
    return r.ranges.some((comparators) => comparatorsSatisfiable(comparators));
  });
}

function comparatorsSatisfiable(comparators: SemVerComparator[]): boolean {
  // Comparators are satisfiable if they all intersect with each other
  for (let i = 0; i < comparators.length - 1; i++) {
    const c0 = comparators[i];
    for (const c1 of comparators.slice(i + 1)) {
      if (!comparatorIntersects(c0, c1)) {
        return false;
      }
    }
  }
  return true;
}

/**
 * The ranges intersect every range of AND comparators intersects with a least one range of OR ranges.
 * @param r0 range 0
 * @param r1 range 1
 * @returns returns true if any
 */
export function rangeIntersects(r0: SemVerRange, r1: SemVerRange): boolean {
  return rangesSatisfiable([r0, r1]) && r0.ranges.some((r00) => {
    return r1.ranges.some((r11) => {
      return r00.every((c0) => {
        return r11.every((c1) => comparatorIntersects(c0, c1));
      });
    });
  });
}

/**
 * @deprecated (will be removed after 0.200.0) Use `rangeIntersects(r0: SemVerRange, r1: SemVerRange)` instead.
 */
export function intersects(
  range0: string | SemVerRange | SemVerComparator,
  range1: string | SemVerRange | SemVerComparator,
  _options?: { includePrerelease: boolean },
) {
  let r0: SemVerRange;
  let r1: SemVerRange;
  if (typeof range0 === "string") {
    r0 = parseRange(range0);
  } else {
    r0 = range0 as SemVerRange;
  }
  if (typeof range1 === "string") {
    r1 = parseRange(range1);
  } else {
    r1 = range1 as SemVerRange;
  }
  return rangeIntersects(r0, r1);
}
