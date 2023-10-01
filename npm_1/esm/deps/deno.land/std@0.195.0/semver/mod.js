// Copyright Isaac Z. Schlueter and Contributors. All rights reserved. ISC license.
// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { parse } from "./parse.js";
import { tryParse } from "./try_parse.js";
import { format } from "./format.js";
import { parseRange } from "./parse_range.js";
import { tryParseRange } from "./try_parse_range.js";
import { testRange } from "./test_range.js";
import { comparatorMin } from "./comparator_min.js";
import { comparatorMax } from "./comparator_max.js";
import { comparatorFormat } from "./comparator_format.js";
import { rangeFormat } from "./range_format.js";
import { lt } from "./lt.js";
export * from "./cmp.js";
export * from "./comparator_format.js";
export * from "./comparator_intersects.js";
export * from "./comparator_max.js";
export * from "./comparator_min.js";
export * from "./compare_build.js";
export * from "./compare.js";
export * from "./constants.js";
export * from "./difference.js";
export * from "./eq.js";
export * from "./format.js";
export * from "./gt.js";
export * from "./gte.js";
export * from "./gtr.js";
export * from "./test_comparator.js";
export * from "./test_range.js";
export * from "./increment.js";
export * from "./is_semver_comparator.js";
export * from "./is_semver_range.js";
export * from "./is_semver.js";
export * from "./lt.js";
export * from "./lte.js";
export * from "./ltr.js";
export * from "./max_satisfying.js";
export * from "./min_satisfying.js";
export * from "./neq.js";
export * from "./outside.js";
export * from "./parse_comparator.js";
export * from "./parse_range.js";
export * from "./parse.js";
export * from "./range_format.js";
export * from "./range_intersects.js";
export * from "./range_max.js";
export * from "./range_min.js";
export * from "./rcompare.js";
export * from "./rsort.js";
export * from "./sort.js";
export * from "./types.js";
export * from "./lte.js";
export * from "./lte.js";
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
