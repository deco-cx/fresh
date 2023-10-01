import type { SemVer, SemVerRange } from "./types.js";
/** Greater than range comparison */
export declare function ltr(version: SemVer, range: SemVerRange): boolean;
/**
 * @deprecated (will be removed after 0.200.0) Use `ltr(version: SemVer, range: SemVerRange)` instead.
 *
 * Greater than range comparison */
export declare function ltr(version: string | SemVer, range: string | SemVerRange, options?: {
    includePrerelease: boolean;
}): boolean;
