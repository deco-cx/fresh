export declare function assertPath(path: string): void;
export declare function isPosixPathSeparator(code: number): boolean;
export declare function isPathSeparator(code: number): boolean;
export declare function isWindowsDeviceRoot(code: number): boolean;
export declare function normalizeString(path: string, allowAboveRoot: boolean, separator: string, isPathSeparator: (code: number) => boolean): string;
export declare function stripTrailingSeparators(segment: string, isSep: (char: number) => boolean): string;
