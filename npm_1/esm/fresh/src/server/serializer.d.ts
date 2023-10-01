interface SerializeResult {
    /** The string serialization. */
    serialized: string;
    /** If the deserializer is required to deserialize this string. If this is
     * `false` the serialized string can be deserialized with `JSON.parse`. */
    requiresDeserializer: boolean;
    /** If the serialization contains serialized signals. If this is `true` the
     * deserializer must be passed a factory functions for signals. */
    hasSignals: boolean;
}
export declare function serialize(data: unknown): SerializeResult;
/**
 * CREDIT: https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
 * Encodes a given Uint8Array, ArrayBuffer or string into RFC4648 base64 representation
 */
export declare function b64encode(buffer: ArrayBuffer): string;
export {};
