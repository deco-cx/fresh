// Copyright Isaac Z. Schlueter and Contributors. All rights reserved. ISC license.
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { parse } from "./parse.ts";
import { tryParse } from "./try_parse.ts";
import { format } from "./format.ts";
import { parseRange } from "./parse_range.ts";
import { tryParseRange } from "./try_parse_range.ts";
import { testRange } from "./test_range.ts";
import { comparatorMin } from "./comparator_min.ts";
import { comparatorMax } from "./comparator_max.ts";
import { comparatorFormat } from "./comparator_format.ts";
import { rangeFormat } from "./range_format.ts";
import { lt } from "./lt.ts";
export * from "./cmp.ts";
export * from "./comparator_format.ts";
export * from "./comparator_intersects.ts";
export * from "./comparator_max.ts";
export * from "./comparator_min.ts";
export * from "./compare_build.ts";
export * from "./compare.ts";
export * from "./constants.ts";
export * from "./difference.ts";
export * from "./eq.ts";
export * from "./format.ts";
export * from "./gt.ts";
export * from "./gte.ts";
export * from "./gtr.ts";
export * from "./test_comparator.ts";
export * from "./test_range.ts";
export * from "./increment.ts";
export * from "./is_semver_comparator.ts";
export * from "./is_semver_range.ts";
export * from "./is_semver.ts";
export * from "./lt.ts";
export * from "./lte.ts";
export * from "./ltr.ts";
export * from "./max_satisfying.ts";
export * from "./min_satisfying.ts";
export * from "./neq.ts";
export * from "./outside.ts";
export * from "./parse_comparator.ts";
export * from "./parse_range.ts";
export * from "./parse.ts";
export * from "./range_format.ts";
export * from "./range_intersects.ts";
export * from "./range_max.ts";
export * from "./range_min.ts";
export * from "./rcompare.ts";
export * from "./rsort.ts";
export * from "./sort.ts";
export * from "./types.ts";
export * from "./lte.ts";
export * from "./lte.ts";
/**
 * @deprecated (will be removed after 0.200.0) Use `parse()` or `tryParse()` instead
 *
 * A compatibility function which checks that a string is a valid semver
 * @param value A string which may or may not contain a valid SemVer
 * @returns A valid SemVer or undefined
 */
export function valid(value) {
    if (value == null)
        return null;
    const v = typeof value === "string" ? tryParse(value) : value;
    if (v == null)
        return null;
    return format(v);
}
/**
 * @deprecated (will be removed after 0.200.0) Use `testRange()` instead
 *
 * A compatibility function that calls testRange
 * @param semver A valid SemVer string
 * @param range A valid SemVerRange string
 * @returns True if the value is valid SemVer in the SemVerRange
 */
export function satisfies(semver, range, options) {
    return testRange(parse(semver, options), typeof range === "string" ? parseRange(range) : range);
}
/**
 * @deprecated (will be removed after 0.200.0) Use comparatorMin instead
 */
export function minVersion(range, _options) {
    const r = typeof range === "string" ? parseRange(range) : range;
    let min = null;
    for (const rangeOr of r.ranges) {
        for (const comparator of rangeOr) {
            const compMin = comparatorMin(comparator.semver, comparator.operator);
            if (!min || lt(compMin, min)) {
                min = compMin;
            }
        }
    }
    return min;
}
/**
 * @deprecated (will be removed after 0.200.0) Use `comparatorMax()` instead
 *
 * A compatibility function to get the maximum version of a range string.
 * @param comparator The comparator
 * @returns The maximum version for the given range
 */
export function maxVersion(comparator) {
    return comparatorMax(comparator.semver, comparator.operator);
}
/** @deprecated (will be removed after 0.200.0) Use parse(...).major instead. */
export function major(v, options) {
    return parse(v, options).major;
}
/** @deprecated (will be removed after 0.200.0) Use parse(...).minor instead. */
export function minor(v, options) {
    return parse(v, options).minor;
}
/** @deprecated (will be removed after 0.200.0) Use parse(...).patch instead. */
export function patch(v, options) {
    return parse(v, options).patch;
}
/** @deprecated (will be removed after 0.200.0) Use parse(...).prerelease.join(".") instead. */
export function prerelease(v, options) {
    return parse(v, options).prerelease.join(".");
}
/** @deprecated (will be removed after 0.200.0) Use `comparatorFormat` instead */
export function toComparators(range, _options) {
    const r = typeof range === "string" ? parseRange(range) : range;
    return r.ranges.map((comparators) => comparators.map((c) => comparatorFormat(c)));
}
/** @deprecated (will be removed after 0.200.0) */
export function validRange(range, _options) {
    const r = typeof range === "string" ? tryParseRange(range) : range;
    if (!r)
        return null;
    return rangeFormat(r);
}
export const SEMVER_SPEC_VERSION = "2.0.0";
