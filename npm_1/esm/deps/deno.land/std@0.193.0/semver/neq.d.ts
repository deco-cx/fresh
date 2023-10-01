import type { SemVer } from "./types.js";
/** Not equal comparison */
export declare function neq(s0: SemVer, s1: SemVer): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `neq(s0: SemVer, s1: SemVer)` instead.
 *
 * Not equal comparison */
export declare function neq(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): boolean;
