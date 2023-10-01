export declare class DenoRuntime {
    fs: DenoRuntimeFileSystem;
    path: DenoRuntimePath;
    getEnvVar(name: string): any;
    getEndOfLine(): "\n" | "\r\n";
    getPathMatchesPattern(path: string, pattern: string): boolean;
}
declare class DenoRuntimePath {
    join(...paths: string[]): string;
    normalize(path: string): string;
    relative(from: string, to: string): string;
}
declare class DenoRuntimeFileSystem {
    delete(path: string): any;
    deleteSync(path: string): void;
    readDirSync(dirPath: string): unknown[];
    readFile(filePath: string, _encoding?: string): any;
    readFileSync(filePath: string, _encoding?: string): any;
    writeFile(filePath: string, fileText: string): any;
    writeFileSync(filePath: string, fileText: string): any;
    mkdir(dirPath: string): Promise<void>;
    mkdirSync(dirPath: string): void;
    move(srcPath: string, destPath: string): any;
    moveSync(srcPath: string, destPath: string): void;
    copy(srcPath: string, destPath: string): any;
    copySync(srcPath: string, destPath: string): any;
    stat(filePath: string): Promise<{
        isFile(): any;
        isDirectory(): any;
    }>;
    statSync(path: string): {
        isFile(): any;
        isDirectory(): any;
    };
    private _toStat;
    realpathSync(path: string): any;
    getCurrentDirectory(): string;
    glob(patterns: ReadonlyArray<string>): Promise<string[]>;
    globSync(patterns: ReadonlyArray<string>): string[];
    isCaseSensitive(): boolean;
}
export {};
