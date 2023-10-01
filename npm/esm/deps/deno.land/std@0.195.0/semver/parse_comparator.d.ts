import type { SemVerComparator } from "./types.ts";
/**
 * Parses a comparator string into a valid SemVerComparator.
 * @param comparator
 * @returns A valid SemVerComparator
 */
export declare function parseComparator(comparator: string): SemVerComparator;
