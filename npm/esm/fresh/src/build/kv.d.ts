export declare const getDependencies: () => Promise<Map<string, string[]> | null>;
export declare const saveDependencies: (deps: Map<string, string[]>) => Promise<any>;
export declare const saveSnapshot: (filesystem: Map<string, Uint8Array>, dependencies: Map<string, string[]>) => Promise<void>;
