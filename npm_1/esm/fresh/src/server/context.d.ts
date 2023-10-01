import { Manifest } from "./mod.js";
import { AppModule, BaseRoute, ErrorPage, FreshOptions, Island, LayoutRoute, MiddlewareRoute, Plugin, RenderFunction, Route, RouterOptions, ServeHandlerInfo, UnknownPage } from "./types.js";
import { JSXConfig } from "../build/mod.js";
interface StaticFile {
    /** The URL to the static file on disk. */
    localUrl: URL;
    /** The path to the file as it would be in the incoming request. */
    path: string;
    /** The size of the file. */
    size: number;
    /** The content-type of the file. */
    contentType: string;
    /** Hash of the file contents. */
    etag: string;
}
export declare class ServerContext {
    #private;
    constructor(routes: Route[], islands: Island[], staticFiles: StaticFile[], renderfn: RenderFunction, middlewares: MiddlewareRoute[], app: AppModule, layouts: LayoutRoute[], notFound: UnknownPage, error: ErrorPage, plugins: Plugin[], configPath: string, jsxConfig: JSXConfig, dev: boolean | undefined, routerOptions: RouterOptions);
    /**
     * Process the manifest into individual components and pages.
     */
    static fromManifest(manifest: Manifest, opts: FreshOptions & {
        skipSnapshot?: boolean;
    }): Promise<ServerContext>;
    /**
     * This functions returns a request handler that handles all routes required
     * by Fresh, including static files.
     */
    handler(): (req: Request, connInfo?: ServeHandlerInfo) => Promise<Response>;
}
export declare function selectSharedRoutes<T extends {
    baseRoute: BaseRoute;
}>(curBaseRoute: BaseRoute, items: T[]): T[];
/**
 * Sort route paths where special Fresh files like `_app`,
 * `_layout` and `_middleware` are sorted in front.
 */
export declare function sortRoutePaths(a: string, b: string): 1 | -1 | 0;
/** Transform a filesystem URL path to a `path-to-regex` style matcher. */
export declare function pathToPattern(path: string): string;
export declare function normalizeURLPath(path: string): string | null;
export declare function toBaseRoute(input: string): BaseRoute;
export {};
