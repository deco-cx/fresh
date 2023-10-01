import type { SemVer } from "./types.js";
/** Less than or equal to comparison */
export declare function lte(s0: SemVer, s1: SemVer): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `lte(s0: SemVer, s1: SemVer)` instead.
 *
 * Less than or equal to comparison */
export declare function lte(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): boolean;
