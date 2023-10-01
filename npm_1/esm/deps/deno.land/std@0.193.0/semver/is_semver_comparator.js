// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { isSemVer } from "./is_semver.js";
import { isValidOperator } from "./_shared.js";
import { ALL, NONE } from "./constants.js";
/**
 * Does a deep check on the value to see if it is a valid SemVerComparator object.
 *
 * Objects with extra fields are still considered valid if they have at
 * least the correct fields.
 *
 * Adds a type assertion if true.
 * @param value The value to check if its a SemVerComparator
 * @returns True if the object is a SemVerComparator otherwise false
 */
export function isSemVerComparator(value) {
    if (value == null)
        return false;
    if (value === NONE)
        return true;
    if (value === ALL)
        return true;
    if (Array.isArray(value))
        return false;
    if (typeof value !== "object")
        return false;
    const { operator, semver, min, max } = value;
    return (isValidOperator(operator) &&
        isSemVer(semver) &&
        isSemVer(min) &&
        isSemVer(max));
}
