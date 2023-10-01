export declare const isSupported: () => boolean;
export declare const getFile: (file: string) => Promise<ReadableStream<Uint8Array> | null>;
export declare const saveFile: (file: string, content: Uint8Array) => Promise<any>;
export declare const housekeep: () => Promise<null | undefined>;
