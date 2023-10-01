export interface CheckFile {
    last_checked: string;
    latest_version: string;
    current_version: string;
}
declare function getFreshCacheDir(): string | null;
declare function fetchLatestVersion(): Promise<any>;
declare function readCurrentVersion(): Promise<string>;
export declare function updateCheck(interval: number, getCacheDir?: typeof getFreshCacheDir, getLatestVersion?: typeof fetchLatestVersion, getCurrentVersion?: typeof readCurrentVersion): Promise<void>;
export {};
