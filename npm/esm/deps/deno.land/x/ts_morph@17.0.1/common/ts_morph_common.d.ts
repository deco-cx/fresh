export const DiagnosticCategory: any;
export const EmitHint: any;
export const LanguageVariant: any;
export const ModuleKind: any;
export const ModuleResolutionKind: any;
export const NewLineKind: any;
export const NodeFlags: any;
export const ObjectFlags: any;
export const ScriptKind: any;
export const ScriptTarget: any;
export const SymbolFlags: any;
export const SyntaxKind: any;
export const TypeFlags: any;
export const TypeFormatFlags: any;
export class ArrayUtils {
    static isReadonlyArray(a: any): boolean;
    static isNullOrEmpty(a: any): boolean;
    static getUniqueItems(a: any): any;
    static removeFirst(a: any, item: any): boolean;
    static removeAll(a: any, isMatch: any): any[];
    static flatten(items: any): any;
    static from(items: any): any[];
    static toIterator(items: any): Generator<any, void, unknown>;
    static sortByProperty(items: any, getProp: any): any;
    static groupBy(items: any, getGroup: any): any[];
    static binaryInsertWithOverwrite(items: any, newItem: any, comparer: any): void;
    static binarySearch(items: any, storedComparer: any): number;
    static containsSubArray(items: any, subArray: any): boolean;
}
export class ComparerToStoredComparer {
    constructor(comparer: any, storedValue: any);
    comparer: any;
    storedValue: any;
    compareTo(value: any): any;
}
export class CompilerOptionsContainer extends SettingsContainer {
    constructor();
    getEncoding(): any;
}
export class DocumentRegistry {
    constructor(transactionalFileSystem: any);
    transactionalFileSystem: any;
    sourceFileCacheByFilePath: Map<any, any>;
    createOrUpdateSourceFile(fileName: any, compilationSettings: any, scriptSnapshot: any, scriptKind: any): any;
    removeSourceFile(fileName: any): void;
    acquireDocument(fileName: any, compilationSettings: any, scriptSnapshot: any, version: any, scriptKind: any): any;
    acquireDocumentWithKey(fileName: any, path: any, compilationSettings: any, key: any, scriptSnapshot: any, version: any, scriptKind: any): any;
    updateDocument(fileName: any, compilationSettings: any, scriptSnapshot: any, version: any, scriptKind: any): any;
    updateDocumentWithKey(fileName: any, path: any, compilationSettings: any, key: any, scriptSnapshot: any, version: any, scriptKind: any): any;
    getKeyForCompilationSettings(settings: any): string;
    releaseDocument(fileName: any, compilationSettings: any): void;
    releaseDocumentWithKey(path: any, key: any): void;
    reportStats(): void;
    getSourceFileVersion(sourceFile: any): any;
    getNextSourceFileVersion(sourceFile: any): string;
    updateSourceFile(fileName: any, compilationSettings: any, scriptSnapshot: any, version: any, scriptKind: any): any;
}
export namespace DocumentRegistry {
    const initialVersion: string;
}
export class EventContainer {
    subscriptions: any[];
    subscribe(subscription: any): void;
    unsubscribe(subscription: any): void;
    fire(arg: any): void;
    getIndex(subscription: any): number;
}
export class FileUtils {
    static isNotExistsError(err: any): boolean;
    static pathJoin(basePath: any, ...paths: any[]): any;
    static pathIsAbsolute(fileOrDirPath: any): any;
    static getStandardizedAbsolutePath(fileSystem: any, fileOrDirPath: any, relativeBase: any): any;
    static getDirPath(fileOrDirPath: any): any;
    static getBaseName(fileOrDirPath: any): any;
    static getExtension(fileOrDirPath: any): any;
    static standardizeSlashes(fileOrDirPath: any): any;
    static pathEndsWith(fileOrDirPath: any, endsWithPath: any): boolean;
    static pathStartsWith(fileOrDirPath: any, startsWithPath: any): boolean;
    static splitPathBySlashes(fileOrDirPath: any): any;
    static getParentMostPaths(paths: any): any[];
    static readFileOrNotExists(fileSystem: any, filePath: any, encoding: any): Promise<any>;
    static readFileOrNotExistsSync(fileSystem: any, filePath: any, encoding: any): any;
    static getTextWithByteOrderMark(text: any): any;
    static getRelativePathTo(absoluteDirPathFrom: any, absolutePathTo: any): any;
    static isRootDirPath(dirOrFilePath: any): boolean;
    static getDescendantDirectories(fileSystemWrapper: any, dirPath: any): any;
    static toAbsoluteGlob(glob: any, cwd: any): any;
    static isNegatedGlob(glob: any): boolean;
}
export namespace FileUtils {
    const standardizeSlashesRegex: RegExp;
    const trimSlashStartRegex: RegExp;
    const trimSlashEndRegex: RegExp;
    const ENOENT: string;
}
export class InMemoryFileSystemHost {
    directories: Map<any, any>;
    isCaseSensitive(): boolean;
    delete(path: any): Promise<void>;
    deleteSync(path: any): void;
    readDirSync(dirPath: any): {
        name: any;
        isDirectory: boolean;
        isFile: boolean;
        isSymlink: boolean;
    }[];
    readFile(filePath: any, encoding?: string): Promise<any>;
    readFileSync(filePath: any, encoding?: string): any;
    writeFile(filePath: any, fileText: any): Promise<void>;
    writeFileSync(filePath: any, fileText: any): void;
    _writeFileSync(filePath: any, fileText: any): void;
    mkdir(dirPath: any): Promise<void>;
    mkdirSync(dirPath: any): void;
    move(srcPath: any, destPath: any): Promise<void>;
    moveSync(srcPath: any, destPath: any): void;
    copy(srcPath: any, destPath: any): Promise<void>;
    copySync(srcPath: any, destPath: any): void;
    _copyDirInternal(from: any, to: any): void;
    fileExists(filePath: any): Promise<any>;
    fileExistsSync(filePath: any): any;
    directoryExists(dirPath: any): Promise<boolean>;
    directoryExistsSync(dirPath: any): boolean;
    realpathSync(path: any): any;
    getCurrentDirectory(): string;
    glob(patterns: any): Promise<any[]>;
    globSync(patterns: any): any[];
    getOrCreateDir(dirPath: any): any;
}
export class IterableUtils {
    static find(items: any, condition: any): any;
}
export class KeyValueCache {
    cacheItems: Map<any, any>;
    getSize(): number;
    getValues(): IterableIterator<any>;
    getValuesAsArray(): any[];
    getKeys(): IterableIterator<any>;
    getEntries(): IterableIterator<[any, any]>;
    getOrCreate(key: any, createFunc: any): any;
    has(key: any): boolean;
    get(key: any): any;
    set(key: any, value: any): void;
    replaceKey(key: any, newKey: any): void;
    removeByKey(key: any): void;
    clear(): void;
}
export class LocaleStringComparer {
    compareTo(a: any, b: any): 1 | -1 | 0;
}
export namespace LocaleStringComparer {
    const instance: LocaleStringComparer;
}
export function Memoize(target: any, propertyName: any, descriptor: any): void;
export class ObjectUtils {
    static clone(obj: any): any;
}
export class PropertyComparer {
    constructor(getProperty: any, comparer: any);
    getProperty: any;
    comparer: any;
    compareTo(a: any, b: any): any;
}
export class PropertyStoredComparer {
    constructor(getProperty: any, comparer: any);
    getProperty: any;
    comparer: any;
    compareTo(value: any): any;
}
export class RealFileSystemHost {
    delete(path: any): Promise<void>;
    deleteSync(path: any): void;
    readDirSync(dirPath: any): import("@deno/shim-deno").Deno.DirEntry[];
    readFile(filePath: any, encoding?: string): Promise<string>;
    readFileSync(filePath: any, encoding?: string): string;
    writeFile(filePath: any, fileText: any): Promise<void>;
    writeFileSync(filePath: any, fileText: any): void;
    mkdir(dirPath: any): Promise<void>;
    mkdirSync(dirPath: any): void;
    move(srcPath: any, destPath: any): Promise<void>;
    moveSync(srcPath: any, destPath: any): void;
    copy(srcPath: any, destPath: any): Promise<void>;
    copySync(srcPath: any, destPath: any): void;
    fileExists(filePath: any): Promise<any>;
    fileExistsSync(filePath: any): any;
    directoryExists(dirPath: any): Promise<any>;
    directoryExistsSync(dirPath: any): any;
    realpathSync(path: any): string;
    getCurrentDirectory(): any;
    glob(patterns: any): Promise<string[]>;
    globSync(patterns: any): string[];
    isCaseSensitive(): boolean;
    getDirectoryNotFoundErrorIfNecessary(err: any, path: any): any;
    getFileNotFoundErrorIfNecessary(err: any, path: any): any;
}
export namespace ResolutionHosts {
    export { denoResolutionHostFactory as deno };
}
export class SettingsContainer {
    constructor(defaultSettings: any);
    _defaultSettings: any;
    _settings: any;
    reset(): void;
    get(): any;
    set(settings: any): void;
    onModified(action: any): void;
    _modifiedEventContainer: EventContainer | undefined;
    _fireModified(): void;
}
export class SortedKeyValueArray {
    constructor(getKey: any, comparer: any);
    getKey: any;
    comparer: any;
    array: any[];
    set(value: any): void;
    removeByValue(value: any): void;
    removeByKey(key: any): void;
    getArrayCopy(): any[];
    hasItems(): boolean;
    entries(): Generator<any, void, undefined>;
}
export class StringUtils {
    static isWhitespaceCharCode(charCode: any): boolean;
    static isSpaces(text: any): boolean;
    static hasBom(text: any): boolean;
    static stripBom(text: any): any;
    static stripQuotes(text: any): any;
    static isQuoted(text: any): any;
    static isNullOrWhitespace(str: any): boolean;
    static isNullOrEmpty(str: any): boolean;
    static isWhitespace(text: any): boolean;
    static startsWithNewLine(str: any): boolean;
    static endsWithNewLine(str: any): boolean;
    static insertAtLastNonWhitespace(str: any, insertText: any): any;
    static getLineNumberAtPos(str: any, pos: any): number;
    static getLengthFromLineStartAtPos(str: any, pos: any): number;
    static getLineStartFromPos(str: any, pos: any): any;
    static getLineEndFromPos(str: any, pos: any): any;
    static escapeForWithinString(str: any, quoteKind: any): string;
    static escapeChar(str: any, char: any): string;
    static removeIndentation(str: any, opts: any): any;
    static indent(str: any, times: any, options: any): any;
}
export class TransactionalFileSystem {
    constructor(options: any);
    directories: KeyValueCache;
    operationIndex: number;
    fileSystem: any;
    pathCasingMaintainer: PathCasingMaintainer;
    libFileMap: Map<any, any> | undefined;
    queueFileDelete(filePath: any): void;
    removeFileDelete(filePath: any): void;
    queueMkdir(dirPath: any): void;
    queueDirectoryDelete(dirPath: any): void;
    queueMoveDirectory(srcPath: any, destPath: any): void;
    queueCopyDirectory(srcPath: any, destPath: any): void;
    flush(): Promise<void>;
    flushSync(): void;
    saveForDirectory(dirPath: any): Promise<void>;
    saveForDirectorySync(dirPath: any): void;
    getAndClearOperationsForDir(dir: any): any;
    executeOperation(operation: any): Promise<void>;
    executeOperationSync(operation: any): void;
    getAndClearOperations(): any[];
    moveFileImmediately(oldFilePath: any, newFilePath: any, fileText: any): Promise<void>;
    moveFileImmediatelySync(oldFilePath: any, newFilePath: any, fileText: any): void;
    deleteFileImmediately(filePath: any): Promise<void>;
    deleteFileImmediatelySync(filePath: any): void;
    copyDirectoryImmediately(srcDirPath: any, destDirPath: any): Promise<void>;
    copyDirectoryImmediatelySync(srcDirPath: any, destDirPath: any): void;
    moveDirectoryImmediately(srcDirPath: any, destDirPath: any): Promise<void>;
    moveDirectoryImmediatelySync(srcDirPath: any, destDirPath: any): void;
    deleteDirectoryImmediately(dirPath: any): Promise<void>;
    clearDirectoryImmediately(dirPath: any): Promise<void>;
    clearDirectoryImmediatelySync(dirPath: any): void;
    deleteDirectoryImmediatelySync(dirPath: any): void;
    deleteSuppressNotFound(path: any): Promise<void>;
    deleteSuppressNotFoundSync(path: any): void;
    fileExists(filePath: any): any;
    fileExistsSync(filePath: any): any;
    _fileDeletedInMemory(filePath: any): boolean;
    directoryExistsSync(dirPath: any): any;
    readFileIfExistsSync(filePath: any, encoding: any): any;
    readFileSync(filePath: any, encoding: any): any;
    readFileIfExists(filePath: any, encoding: any): any;
    readFile(filePath: any, encoding: any): any;
    _verifyCanReadFile(filePath: any): void;
    readDirSync(dirPath: any): any;
    glob(patterns: any): AsyncGenerator<any, void, unknown>;
    globSync(patterns: any): Generator<any, void, unknown>;
    getFileSystem(): any;
    getCurrentDirectory(): any;
    getDirectories(dirPath: any): any;
    realpathSync(path: any): any;
    getStandardizedAbsolutePath(fileOrDirPath: any, relativeBase: any): any;
    readFileOrNotExists(filePath: any, encoding: any): false | Promise<any>;
    readFileOrNotExistsSync(filePath: any, encoding: any): any;
    writeFile(filePath: any, fileText: any): Promise<void>;
    writeFileSync(filePath: any, fileText: any): void;
    isPathDirectoryInQueueThatExists(path: any): boolean;
    isPathQueuedForDeletion(path: any): any;
    removeDirAndSubDirs(dir: any): void;
    addBackDirAndSubDirs(dir: any): void;
    getNextOperationIndex(): number;
    getParentDirectoryIfExists(filePath: any): any;
    getOrCreateParentDirectory(filePath: any): any;
    getDirectoryIfExists(dirPath: any): any;
    getOrCreateDirectory(dirPath: any): any;
    throwIfHasExternalOperations(dir: any, commandName: any): void;
    ensureDirectoryExists(dir: any): Promise<void>;
    ensureDirectoryExistsSync(dir: any): void;
    removeMkDirOperationsForDir(dir: any): void;
    libFileExists(filePath: any): boolean;
    readLibFile(filePath: any): any;
    throwIfLibFile(filePath: any): void;
}
export class TsConfigResolver {
    constructor(fileSystem: any, tsConfigFilePath: any, encoding: any);
    fileSystem: any;
    encoding: any;
    host: {
        useCaseSensitiveFileNames: boolean;
        readDirectory: (rootDir: any, extensions: any, excludes: any, includes: any, depth: any) => any;
        fileExists: (path: any) => any;
        readFile: (path: any) => any;
        getDirectories: () => any[];
        clearDirectories: () => number;
    };
    tsConfigFilePath: any;
    tsConfigDirPath: any;
    getCompilerOptions(): any;
    getErrors(): any;
    getPaths(compilerOptions: any): {
        filePaths: any[];
        directoryPaths: any[];
    };
    parseJsonConfigFileContent(): any;
    getTsConfigFileJson(): any;
}
export class WeakCache {
    cacheItems: WeakMap<object, any>;
    getOrCreate(key: any, createFunc: any): any;
    has(key: any): boolean;
    get(key: any): any;
    set(key: any, value: any): void;
    removeByKey(key: any): void;
}
export function createDocumentCache(files: any): InternalDocumentCache;
export function createHosts(options: any): {
    languageServiceHost: {
        getCompilationSettings: () => any;
        getNewLine: any;
        getProjectVersion: any;
        getScriptFileNames: () => any[];
        getScriptVersion: (fileName: any) => any;
        getScriptSnapshot: (fileName: any) => any;
        getCurrentDirectory: () => any;
        getDefaultLibFileName: (options: any) => string;
        isKnownTypesPackageName: any;
        useCaseSensitiveFileNames: () => boolean;
        readFile: (path: any, encoding: any) => any;
        fileExists: (filePath: any) => any;
        directoryExists: (dirName: any) => any;
        resolveModuleNames: any;
        resolveTypeReferenceDirectives: any;
        getResolvedModuleWithFailedLookupLocationsFromCache: any;
        realpath: (path: any) => any;
    };
    compilerHost: {
        getSourceFile: (fileName: any, languageVersion: any, onError: any) => any;
        getDefaultLibFileName: (options: any) => string;
        writeFile: (fileName: any, data: any, writeByteOrderMark: any, onError: any, sourceFiles: any) => void;
        getCurrentDirectory: () => any;
        getDirectories: (path: any) => any;
        fileExists: (filePath: any) => any;
        readFile: (path: any, encoding: any) => any;
        getCanonicalFileName: (fileName: any) => any;
        useCaseSensitiveFileNames: () => boolean;
        getNewLine: any;
        getEnvironmentVariable: (name: any) => string | undefined;
        directoryExists: (dirName: any) => any;
        resolveModuleNames: any;
        resolveTypeReferenceDirectives: any;
        realpath: (path: any) => any;
    };
};
export function createModuleResolutionHost(options: any): {
    directoryExists: (dirName: any) => any;
    fileExists: (fileName: any) => any;
    readFile: (fileName: any) => any;
    getCurrentDirectory: () => any;
    getDirectories: (dirName: any) => any[];
    realpath: (path: any) => any;
};
export function deepClone(objToClone: any): any;
export var errors: any;
export function getCompilerOptionsFromTsConfig(filePath: any, options?: {}): {
    options: any;
    errors: any;
};
export function getEmitModuleResolutionKind(compilerOptions: any, ...args: any[]): any;
export function getFileMatcherPatterns(path: any, excludes: any, includes: any, useCaseSensitiveFileNames: any, currentDirectory: any, ...args: any[]): any;
export function getLibFiles(): {
    fileName: string;
    text: string;
}[];
export function getLibFolderPath(options: any): any;
export function getSyntaxKindName(kind: any): any;
export const libFolderInMemoryPath: "/node_modules/typescript/lib";
export function matchFiles(path: any, extensions: any, excludes: any, includes: any, useCaseSensitiveFileNames: any, currentDirectory: any, depth: any, getEntries: any, realpath: any, directoryExists: any, ...args: any[]): any;
export function matchGlobs(paths: any, patterns: any, cwd: any): any[];
export function nameof(key1: any, key2: any): any;
export const runtime: DenoRuntime;
declare function denoResolutionHostFactory(moduleResolutionHost: any, getCompilerOptions: any): {
    resolveModuleNames: (moduleNames: any, containingFile: any) => any[];
};
declare class PathCasingMaintainer {
    constructor(fileSystem: any);
    caseInsensitiveMappings: Map<any, any> | undefined;
    getPath(fileOrDirPath: any): any;
    removePath(dirPath: any): void;
}
declare class InternalDocumentCache {
    _fileTexts: Map<any, any>;
    _documents: Map<any, any>;
    _addFiles(files: any): void;
    _getFilePaths(): IterableIterator<any>;
    _getCacheForFileSystem(fileSystem: any): FileSystemDocumentCache;
    _getDocumentIfMatch(filePath: any, absoluteFilePath: any, scriptSnapshot: any, scriptTarget: any, scriptKind: any): any;
    _getDocument(filePath: any, absoluteFilePath: any, scriptSnapshot: any, scriptTarget: any, scriptKind: any): any;
    _getKey(filePath: any, scriptTarget: any, scriptKind: any): any;
}
import { DenoRuntime } from "./DenoRuntime.ts";
declare class FileSystemDocumentCache {
    constructor(fileSystem: any, documentCache: any);
    documentCache: any;
    absoluteToOriginalPath: Map<any, any>;
    getDocumentIfMatch(filePath: any, scriptSnapshot: any, scriptTarget: any, scriptKind: any): any;
}
export { ts };
