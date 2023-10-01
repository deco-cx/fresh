import { GlobOptions } from "../path/mod.js";
import { WalkEntry } from "./walk.js";
export interface ExpandGlobOptions extends Omit<GlobOptions, "os"> {
    root?: string;
    exclude?: string[];
    includeDirs?: boolean;
}
/** Expand the glob string from the specified `root` directory and yield each
 * result as a `WalkEntry` object.
 *
 * See [`globToRegExp()`](../path/glob.ts#globToRegExp) for details on supported
 * syntax.
 *
 * Example:
 * ```ts
 *      import { expandGlob } from "./expand_glob.ts";
 *      for await (const file of expandGlob("**\/*.ts")) {
 *        console.log(file);
 *      }
 * ```
 */
export declare function expandGlob(glob: string, { root, exclude, includeDirs, extended, globstar, caseInsensitive, }?: ExpandGlobOptions): AsyncIterableIterator<WalkEntry>;
/** Synchronous version of `expandGlob()`.
 *
 * Example:
 *
 * ```ts
 *      import { expandGlobSync } from "./expand_glob.ts";
 *      for (const file of expandGlobSync("**\/*.ts")) {
 *        console.log(file);
 *      }
 * ```
 */
export declare function expandGlobSync(glob: string, { root, exclude, includeDirs, extended, globstar, caseInsensitive, }?: ExpandGlobOptions): IterableIterator<WalkEntry>;
