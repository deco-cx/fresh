import { LayoutConfig } from "../../server.js";
import { ComponentChildren } from "preact";
import { ServerContext } from "./context.js";
export { Status } from "./deps.js";
import { ErrorHandler, Handler, Handlers, IslandModule, MiddlewareModule, RouteConfig, ServeHandlerInfo, StartOptions, UnknownHandler } from "./types.js";
export { defineApp, defineConfig, defineLayout, defineRoute, } from "./defines.js";
export type { AppContext, AppProps, ErrorHandler, ErrorHandlerContext, ErrorPageProps, FreshOptions, Handler, HandlerContext, Handlers, LayoutConfig, LayoutContext, LayoutProps, MiddlewareHandler, MiddlewareHandlerContext, MultiHandler, PageProps, Plugin, PluginAsyncRenderContext, PluginAsyncRenderFunction, PluginRenderContext, PluginRenderFunction, PluginRenderFunctionResult, PluginRenderResult, PluginRenderScripts, PluginRenderStyleTag, RenderFunction, RouteConfig, RouteContext, ServeHandlerInfo, StartOptions, UnknownHandler, UnknownHandlerContext, UnknownPageProps, } from "./types.js";
export { RenderContext } from "./render.js";
export type { InnerRenderFunction } from "./render.js";
export interface Manifest {
    routes: Record<string, {
        default?: (propsOrRequest: any, ctx: any) => Promise<ComponentChildren | Response> | ComponentChildren;
        handler?: Handler<any, any> | Handlers<any, any> | UnknownHandler;
        config?: RouteConfig | LayoutConfig | ErrorHandler;
    } | MiddlewareModule>;
    islands: Record<string, IslandModule>;
    baseUrl: string;
}
export interface DenoConfig {
    imports?: Record<string, string>;
    importMap?: string;
    tasks?: Record<string, string>;
    lint?: {
        rules: {
            tags?: string[];
        };
        exclude?: string[];
    };
    fmt?: {
        exclude?: string[];
    };
    compilerOptions?: {
        jsx?: string;
        jsxImportSource?: string;
    };
}
export { ServerContext };
export declare function createHandler(routes: Manifest, opts?: StartOptions): Promise<(req: Request, connInfo?: ServeHandlerInfo) => Promise<Response>>;
export declare function start(routes: Manifest, opts?: StartOptions): Promise<void>;
