import type { SemVerComparator, SemVerRange } from "./types.js";
/**
 * The ranges intersect every range of AND comparators intersects with a least one range of OR ranges.
 * @param r0 range 0
 * @param r1 range 1
 * @returns returns true if any
 */
export declare function rangeIntersects(r0: SemVerRange, r1: SemVerRange): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `rangeIntersects(r0: SemVerRange, r1: SemVerRange)` instead.
 */
export declare function intersects(range0: string | SemVerRange | SemVerComparator, range1: string | SemVerRange | SemVerComparator, _options?: {
    includePrerelease: boolean;
}): boolean;
