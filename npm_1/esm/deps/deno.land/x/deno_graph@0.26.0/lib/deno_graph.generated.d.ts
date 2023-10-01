/**
 * @param {string} specifier
 * @param {any} maybe_headers
 * @param {string | undefined} maybe_jsx_import_source_module
 * @param {string} content
 * @param {any} maybe_kind
 * @param {Function | undefined} maybe_resolve
 * @param {Function | undefined} maybe_resolve_types
 * @returns {Module}
 */
export function parseModule(specifier: string, maybe_headers: any, maybe_jsx_import_source_module: string | undefined, content: string, maybe_kind: any, maybe_resolve: Function | undefined, maybe_resolve_types: Function | undefined): Module;
/**
 * @param {any} roots
 * @param {Function} load
 * @param {string | undefined} maybe_jsx_import_source_module
 * @param {Function | undefined} maybe_cache_info
 * @param {Function | undefined} maybe_resolve
 * @param {Function | undefined} maybe_resolve_types
 * @param {Function | undefined} maybe_check
 * @param {Function | undefined} maybe_get_checksum
 * @param {string | undefined} maybe_lockfile_name
 * @param {string | undefined} maybe_build_kind
 * @param {any} maybe_imports
 * @returns {Promise<ModuleGraph>}
 */
export function createGraph(roots: any, load: Function, maybe_jsx_import_source_module: string | undefined, maybe_cache_info: Function | undefined, maybe_resolve: Function | undefined, maybe_resolve_types: Function | undefined, maybe_check: Function | undefined, maybe_get_checksum: Function | undefined, maybe_lockfile_name: string | undefined, maybe_build_kind: string | undefined, maybe_imports: any): Promise<ModuleGraph>;
/** */
export class Module {
    static __wrap(ptr: any): any;
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
    /**
     * @returns {any}
     */
    get cacheInfo(): any;
    /**
     * @returns {string | undefined}
     */
    get checksum(): string | undefined;
    /**
     * @returns {any}
     */
    get dependencies(): any;
    /**
     * @returns {any}
     */
    get kind(): any;
    /**
     * @returns {string}
     */
    get mediaType(): string;
    /**
     * @returns {number}
     */
    get size(): number;
    /**
     * @returns {string}
     */
    get source(): string;
    /**
     * @returns {string}
     */
    get specifier(): string;
    /**
     * @returns {any}
     */
    get typesDependency(): any;
    /**
     * @returns {any}
     */
    toJSON(): any;
}
/** */
export class ModuleGraph {
    static __wrap(ptr: any): any;
    __destroy_into_raw(): number | undefined;
    ptr: number | undefined;
    free(): void;
    /**
     * @returns {Array<any>}
     */
    get roots(): any[];
    /**
     * @param {string} specifier
     * @returns {Module | undefined}
     */
    get(specifier: string): Module | undefined;
    /** */
    lock(): void;
    /**
     * @returns {Array<any>}
     */
    get modules(): any[];
    /**
     * @param {string} specifier
     * @returns {string}
     */
    resolve(specifier: string): string;
    /**
     * @param {string} specifier
     * @param {string} referrer
     * @param {boolean} prefer_types
     * @returns {string | undefined}
     */
    resolveDependency(specifier: string, referrer: string, prefer_types: boolean): string | undefined;
    /**
     * @returns {any}
     */
    toJSON(): any;
    /**
     * @param {boolean | undefined} maybe_no_color
     * @returns {string}
     */
    toString(maybe_no_color: boolean | undefined): string;
}
export const _wasm: WebAssembly.Exports;
export const _wasmInstance: WebAssembly.Instance;
