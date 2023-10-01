export declare const CACHE_PERM = 420;
export declare function assert(cond: unknown, msg?: string): asserts cond;
/**
 * Generates a sha256 hex hash for a given input string.  This mirrors the
 * behavior of Deno CLI's `cli::checksum::gen`.
 *
 * Would love to use the Crypto API here, but it only works async and we need
 * to be able to generate the hashes sync to be able to keep the cache able to
 * look up files synchronously.
 */
export declare function hash(value: string): string;
export declare function urlToFilename(url: URL): string;
export declare function isFile(filePath: string): Promise<boolean>;
export declare function isFileSync(filePath: string): boolean;
