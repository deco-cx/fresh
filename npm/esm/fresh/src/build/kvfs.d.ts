export declare const isSupported: () => boolean;
export declare const getFile: (file: string) => Promise<any>;
export declare const saveFile: (file: string, content: Uint8Array) => Promise<any>;
export declare const housekeep: () => Promise<null | undefined>;
