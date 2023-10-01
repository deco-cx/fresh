export declare class RetryError extends Error {
    constructor(cause: unknown, attempts: number);
}
export interface RetryOptions {
    /** How much to backoff after each retry. This is `2` by default. */
    multiplier?: number;
    /** The maximum milliseconds between attempts. This is `60000` by default. */
    maxTimeout?: number;
    /** The maximum amount of attempts until failure. This is `5` by default. */
    maxAttempts?: number;
    /** The initial and minimum amount of milliseconds between attempts. This is `1000` by default. */
    minTimeout?: number;
    /** Amount of jitter to introduce to the time between attempts. This is `1` for full jitter by default. */
    jitter?: number;
}
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
export declare function retry<T>(fn: (() => Promise<T>) | (() => T), opts?: RetryOptions): Promise<T>;
export declare function _exponentialBackoffWithJitter(cap: number, base: number, attempt: number, multiplier: number, jitter: number): number;
