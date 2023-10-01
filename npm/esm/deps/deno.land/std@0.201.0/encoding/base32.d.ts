/**
 * Returns number of bytes encoded in the given RFC4648 base32 string input.
 * @param b32
 */
export declare function byteLength(b32: string): number;
/**
 * Decodes a given RFC4648 base32 encoded string.
 * @param b32
 */
export declare function decode(b32: string): Uint8Array;
/**
 * Encodes a given Uint8Array into RFC4648 base32 representation
 * @param uint8
 */
export declare function encode(uint8: Uint8Array): string;
