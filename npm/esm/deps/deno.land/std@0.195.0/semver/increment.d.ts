import type { ReleaseType, SemVer } from "./types.ts";
/**
 * Returns the new version resulting from an increment by release type.
 *
 * `premajor`, `preminor` and `prepatch` will bump the version up to the next version,
 * based on the type, and will also add prerelease metadata.
 *
 * If called from a non-prerelease version, the `prerelease` will work the same as
 * `prepatch`. The patch version is incremented and then is made into a prerelease. If
 * the input version is already a prerelease it will simply increment the prerelease
 * metadata.
 *
 * If a prerelease identifier is specified without a number then a number will be added.
 * For example `pre` will result in `pre.0`. If the existing version already has a
 * prerelease with a number and its the same prerelease identifier then the number
 * will be incremented. If the identifier differs from the new identifier then the new
 * identifier is applied and the number is reset to `0`.
 *
 * If the input version has build metadata it will be preserved on the resulting version
 * unless a new build parameter is specified. Specifying `""` will unset existing build
 * metadata.
 * @param version The version to increment
 * @param release The type of increment to perform
 * @param prerelease The pre-release metadata of the new version
 * @param build The build metadata of the new version
 * @returns
 */
export declare function increment(version: SemVer, release: ReleaseType, prerelease?: string, build?: string): SemVer;
/** @deprecated (will be removed after 0.200.0) Use `increment(version: SemVer, release: ReleaseType, prerelease?: string, build?: string)` instead. */
export declare function increment(version: string | SemVer, release: ReleaseType, options?: {
    includePrerelease: boolean;
}, prerelease?: string, build?: string): string;
