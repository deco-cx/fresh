// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import { assert } from "../_util/asserts.js";
export class RetryError extends Error {
    constructor(cause, attempts) {
        super(`Retrying exceeded the maxAttempts (${attempts}).`);
        this.name = "RetryError";
        this.cause = cause;
    }
}
const defaultRetryOptions = {
    multiplier: 2,
    maxTimeout: 60000,
    maxAttempts: 5,
    minTimeout: 1000,
    jitter: 1,
};
/**
 * Calls the given (possibly asynchronous) function up to `maxAttempts` times.
 * Retries as long as the given function throws.
 * If the attempts are exhausted, throws an `RetryError` with `cause` set to the inner exception.
 *
 * The backoff is calculated by multiplying `minTimeout` with `multiplier` to the power of the current attempt counter (starting at 0 up to `maxAttempts - 1`). It is capped at `maxTimeout` however.
 * How long the actual delay is, depends on `jitter`.
 *
 * When `jitter` is the default value of `1`, waits between two attempts for a randomized amount between 0 and the backoff time.
 * With the default options the maximal delay will be `15s = 1s + 2s + 4s + 8s`. If all five attempts are exhausted the mean delay will be `9.5s = ½(4s + 15s)`.
 *
 * When `jitter` is `0`, waits the full backoff time.
 *
 * @example
 * ```typescript
 * import { retry } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 * const req = async () => {
 *  // some function that throws sometimes
 * };
 *
 * // Below resolves to the first non-error result of `req`
 * const retryPromise = await retry(req, {
 *  multiplier: 2,
 *  maxTimeout: 60000,
 *  maxAttempts: 5,
 *  minTimeout: 100,
 *  jitter: 1,
 * });
 * ```
 *
 * @example
 * ```typescript
 * import { retry } from "https://deno.land/std@$STD_VERSION/async/mod.ts";
 * const req = async () => {
 *  // some function that throws sometimes
 * };
 *
 * // Make sure we wait at least 1 minute, but at most 2 minutes
 * const retryPromise = await retry(req, {
 *  multiplier: 2.34,
 *  maxTimeout: 80000,
 *  maxAttempts: 7,
 *  minTimeout: 1000,
 *  jitter: 0.5,
 * });
 * ```
 */
export async function retry(fn, opts) {
    const options = {
        ...defaultRetryOptions,
        ...opts,
    };
    assert(options.maxTimeout >= 0, "maxTimeout is less than 0");
    assert(options.minTimeout <= options.maxTimeout, "minTimeout is greater than maxTimeout");
    assert(options.jitter <= 1, "jitter is greater than 1");
    let attempt = 0;
    while (true) {
        try {
            return await fn();
        }
        catch (error) {
            if (attempt + 1 >= options.maxAttempts) {
                throw new RetryError(error, options.maxAttempts);
            }
            const timeout = _exponentialBackoffWithJitter(options.maxTimeout, options.minTimeout, attempt, options.multiplier, options.jitter);
            await new Promise((r) => setTimeout(r, timeout));
        }
        attempt++;
    }
}
export function _exponentialBackoffWithJitter(cap, base, attempt, multiplier, jitter) {
    const exp = Math.min(cap, base * multiplier ** attempt);
    return (1 - jitter * Math.random()) * exp;
}
