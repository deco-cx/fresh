/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Uint8Array}
*/
export function deflate(input: Uint8Array, compression: number | undefined): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
export function inflate(input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Uint8Array}
*/
export function gzip(input: Uint8Array, compression: number | undefined): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
export function gunzip(input: Uint8Array): Uint8Array;
/**
* @param {Uint8Array} input
* @param {number | undefined} compression
* @returns {Uint8Array}
*/
export function zlib(input: Uint8Array, compression: number | undefined): Uint8Array;
/**
* @param {Uint8Array} input
* @returns {Uint8Array}
*/
export function unzlib(input: Uint8Array): Uint8Array;
export default init;
declare function init(input: any): Promise<WebAssembly.Exports>;
