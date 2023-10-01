export declare function ensureMinDenoVersion(): void;
export interface Manifest {
    routes: string[];
    islands: string[];
}
export declare function collect(directory: string): Promise<Manifest>;
export declare function generate(directory: string, manifest: Manifest): Promise<void>;
