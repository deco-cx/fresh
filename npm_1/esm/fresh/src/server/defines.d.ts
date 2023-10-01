import { ComponentChildren } from "preact";
import { AppContext } from "../../server.js";
import { AsyncLayout, AsyncRoute, LayoutContext, RouteContext, StartOptions } from "./types.js";
export declare function defineConfig(config: StartOptions): StartOptions;
export declare function defineRoute<T>(fn: (req: Request, ctx: RouteContext<void, T>) => ComponentChildren | Response | Promise<ComponentChildren | Response>): AsyncRoute<void, T>;
export declare function defineLayout<T>(fn: (req: Request, ctx: LayoutContext<void, T>) => ComponentChildren | Response | Promise<ComponentChildren | Response>): AsyncLayout<void, T>;
export declare function defineApp<T>(fn: (req: Request, ctx: AppContext<void, T>) => ComponentChildren | Response | Promise<ComponentChildren | Response>): AsyncLayout<void, T>;
