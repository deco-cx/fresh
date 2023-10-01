import type { SemVer } from "./types.ts";
/** Greater than comparison */
export declare function gt(s0: SemVer, s1: SemVer): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `gt(s0: SemVer, s1: SemVer)` instead.
 *
 * Greater than comparison */
export declare function gt(s0: string | SemVer, s1: string | SemVer, options?: {
    includePrerelease: boolean;
}): boolean;
