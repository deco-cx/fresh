var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ServerContext_instances, _ServerContext_dev, _ServerContext_routes, _ServerContext_islands, _ServerContext_staticFiles, _ServerContext_renderFn, _ServerContext_middlewares, _ServerContext_app, _ServerContext_layouts, _ServerContext_notFound, _ServerContext_error, _ServerContext_plugins, _ServerContext_builder, _ServerContext_routerOptions, _ServerContext_composeMiddlewares, _ServerContext_handlers, _ServerContext_staticFileHeadHandler, _ServerContext_staticFileGetHandler, _ServerContext_bundleAssetRoute;
import * as dntShim from "../../../_dnt.shims.js";
import { dirname, extname, fromFileUrl, join, JSONC, Status, toFileUrl, typeByExtension, walk, } from "./deps.js";
import { h } from "preact";
import * as router from "./router.js";
import { ALIVE_URL, JS_PREFIX, REFRESH_JS_URL } from "./constants.js";
import { BUILD_ID } from "./build_id.js";
import DefaultErrorHandler from "./default_error_page.js";
import { DEFAULT_RENDER_FN, render as internalRender } from "./render.js";
import { SELF, } from "../runtime/csp.js";
import { ASSET_CACHE_BUST_KEY, INTERNAL_PREFIX } from "../runtime/utils.js";
import { EsbuildBuilder } from "../build/mod.js";
import { setAllIslands } from "./rendering/preact_hooks.js";
const DEFAULT_CONN_INFO = {
    localAddr: { transport: "tcp", hostname: "localhost", port: 8080 },
    remoteAddr: { transport: "tcp", hostname: "localhost", port: 1234 },
};
const ROOT_BASE_ROUTE = toBaseRoute("/");
function isObject(value) {
    return typeof value === "object" &&
        !Array.isArray(value) &&
        value !== null;
}
function isDevMode() {
    // Env var is only set in prod (on Deploy).
    return dntShim.Deno.env.get("DENO_DEPLOYMENT_ID") === undefined;
}
export class ServerContext {
    constructor(routes, islands, staticFiles, renderfn, middlewares, app, layouts, notFound, error, plugins, configPath, jsxConfig, dev = isDevMode(), routerOptions) {
        _ServerContext_instances.add(this);
        _ServerContext_dev.set(this, void 0);
        _ServerContext_routes.set(this, void 0);
        _ServerContext_islands.set(this, void 0);
        _ServerContext_staticFiles.set(this, void 0);
        _ServerContext_renderFn.set(this, void 0);
        _ServerContext_middlewares.set(this, void 0);
        _ServerContext_app.set(this, void 0);
        _ServerContext_layouts.set(this, void 0);
        _ServerContext_notFound.set(this, void 0);
        _ServerContext_error.set(this, void 0);
        _ServerContext_plugins.set(this, void 0);
        _ServerContext_builder.set(this, void 0);
        _ServerContext_routerOptions.set(this, void 0);
        /**
         * Returns a router that contains all Fresh routes. Should be mounted at
         * constants.INTERNAL_PREFIX
         */
        _ServerContext_bundleAssetRoute.set(this, () => {
            return async (_req, _ctx, params) => {
                const contents = await __classPrivateFieldGet(this, _ServerContext_builder, "f").read(params.path);
                if (!contents)
                    return new Response(null, { status: 404 });
                const headers = {
                    "Cache-Control": "public, max-age=604800, immutable",
                };
                const contentType = typeByExtension(extname(params.path));
                if (contentType)
                    headers["Content-Type"] = contentType;
                return new Response(contents, {
                    status: 200,
                    headers,
                });
            };
        });
        __classPrivateFieldSet(this, _ServerContext_routes, routes, "f");
        __classPrivateFieldSet(this, _ServerContext_islands, islands, "f");
        __classPrivateFieldSet(this, _ServerContext_staticFiles, staticFiles, "f");
        __classPrivateFieldSet(this, _ServerContext_renderFn, renderfn, "f");
        __classPrivateFieldSet(this, _ServerContext_middlewares, middlewares, "f");
        __classPrivateFieldSet(this, _ServerContext_app, app, "f");
        __classPrivateFieldSet(this, _ServerContext_layouts, layouts, "f");
        __classPrivateFieldSet(this, _ServerContext_notFound, notFound, "f");
        __classPrivateFieldSet(this, _ServerContext_error, error, "f");
        __classPrivateFieldSet(this, _ServerContext_plugins, plugins, "f");
        __classPrivateFieldSet(this, _ServerContext_dev, dev, "f");
        __classPrivateFieldSet(this, _ServerContext_builder, new EsbuildBuilder({
            buildID: BUILD_ID,
            entrypoints: collectEntrypoints(__classPrivateFieldGet(this, _ServerContext_dev, "f"), __classPrivateFieldGet(this, _ServerContext_islands, "f"), __classPrivateFieldGet(this, _ServerContext_plugins, "f")),
            configPath,
            dev: __classPrivateFieldGet(this, _ServerContext_dev, "f"),
            jsxConfig,
        }), "f");
        __classPrivateFieldSet(this, _ServerContext_routerOptions, routerOptions, "f");
    }
    /**
     * Process the manifest into individual components and pages.
     */
    static async fromManifest(manifest, opts) {
        // Get the manifest' base URL.
        const baseUrl = new URL("./", manifest.baseUrl).href;
        const { config, path: configPath } = await readDenoConfig(fromFileUrl(baseUrl));
        if (typeof config.importMap !== "string" && !isObject(config.imports)) {
            throw new Error("deno.json must contain an 'importMap' or 'imports' property.");
        }
        // Restore snapshot if available
        config.compilerOptions ??= {};
        let jsx;
        switch (config.compilerOptions.jsx) {
            case "react":
            case undefined:
                jsx = "react";
                break;
            case "react-jsx":
                jsx = "react-jsx";
                break;
            default:
                throw new Error("Unknown jsx option: " + config.compilerOptions.jsx);
        }
        const jsxConfig = {
            jsx,
            jsxImportSource: config.compilerOptions.jsxImportSource,
        };
        // Extract all routes, and prepare them into the `Page` structure.
        const routes = [];
        const islands = [];
        const middlewares = [];
        let app = DEFAULT_APP;
        const layouts = [];
        let notFound = DEFAULT_NOT_FOUND;
        let error = DEFAULT_ERROR;
        const allRoutes = [
            ...Object.entries(manifest.routes),
            ...(opts.plugins ? getMiddlewareRoutesFromPlugins(opts.plugins) : []),
            ...(opts.plugins ? getRoutesFromPlugins(opts.plugins) : []),
        ];
        // Presort all routes so that we only need to sort once
        allRoutes.sort((a, b) => sortRoutePaths(a[0], b[0]));
        for (const [self, module] of allRoutes) {
            const url = new URL(self, baseUrl).href;
            if (!url.startsWith(baseUrl + "routes")) {
                throw new TypeError("Page is not a child of the basepath.");
            }
            const path = url.substring(baseUrl.length).substring("routes".length);
            const baseRoute = path.substring(1, path.length - extname(path).length);
            const name = baseRoute.replace("/", "-");
            const isLayout = path.endsWith("/_layout.tsx") ||
                path.endsWith("/_layout.ts") || path.endsWith("/_layout.jsx") ||
                path.endsWith("/_layout.js");
            const isMiddleware = path.endsWith("/_middleware.tsx") ||
                path.endsWith("/_middleware.ts") || path.endsWith("/_middleware.jsx") ||
                path.endsWith("/_middleware.js");
            if (!path.startsWith("/_") && !isLayout && !isMiddleware) {
                const { default: component, config } = module;
                let pattern = pathToPattern(baseRoute);
                if (config?.routeOverride) {
                    pattern = String(config.routeOverride);
                }
                let { handler } = module;
                if (!handler && "handlers" in module) {
                    throw new Error(`Found named export "handlers" in ${self} instead of "handler". Did you mean "handler"?`);
                }
                handler ??= {};
                if (component && typeof handler === "object" && handler.GET === undefined) {
                    handler.GET = (_req, { render }) => render();
                }
                if (typeof handler === "object" && handler.GET !== undefined &&
                    handler.HEAD === undefined) {
                    const GET = handler.GET;
                    handler.HEAD = async (req, ctx) => {
                        const resp = await GET(req, ctx);
                        resp.body?.cancel();
                        return new Response(null, {
                            headers: resp.headers,
                            status: resp.status,
                            statusText: resp.statusText,
                        });
                    };
                }
                const route = {
                    baseRoute: toBaseRoute(baseRoute),
                    pattern,
                    url,
                    name,
                    component,
                    handler,
                    csp: Boolean(config?.csp ?? false),
                    appWrapper: !config?.skipAppWrapper,
                    inheritLayouts: !config?.skipInheritedLayouts,
                };
                routes.push(route);
            }
            else if (isMiddleware) {
                middlewares.push({
                    baseRoute: toBaseRoute(baseRoute),
                    module: module,
                });
            }
            else if (path === "/_app.tsx" || path === "/_app.ts" ||
                path === "/_app.jsx" || path === "/_app.js") {
                app = module;
            }
            else if (isLayout) {
                const mod = module;
                const config = mod.config;
                layouts.push({
                    baseRoute: toBaseRoute(baseRoute),
                    handler: mod.handler,
                    component: mod.default,
                    appWrapper: !config?.skipAppWrapper,
                    inheritLayouts: !config?.skipInheritedLayouts,
                });
            }
            else if (path === "/_404.tsx" || path === "/_404.ts" ||
                path === "/_404.jsx" || path === "/_404.js") {
                const { default: component, config } = module;
                let { handler } = module;
                if (component && handler === undefined) {
                    handler = (_req, { render }) => render();
                }
                notFound = {
                    baseRoute: ROOT_BASE_ROUTE,
                    pattern: pathToPattern(baseRoute),
                    url,
                    name,
                    component,
                    handler: handler ?? ((req) => router.defaultOtherHandler(req)),
                    csp: Boolean(config?.csp ?? false),
                    appWrapper: !config?.skipAppWrapper,
                    inheritLayouts: !config?.skipInheritedLayouts,
                };
            }
            else if (path === "/_500.tsx" || path === "/_500.ts" ||
                path === "/_500.jsx" || path === "/_500.js") {
                const { default: component, config } = module;
                let { handler } = module;
                if (component && handler === undefined) {
                    handler = (_req, { render }) => render();
                }
                error = {
                    baseRoute: toBaseRoute("/"),
                    pattern: pathToPattern(baseRoute),
                    url,
                    name,
                    component,
                    handler: handler ??
                        ((req, ctx) => router.defaultErrorHandler(req, ctx, ctx.error)),
                    csp: Boolean(config?.csp ?? false),
                    appWrapper: !config?.skipAppWrapper,
                    inheritLayouts: !config?.skipInheritedLayouts,
                };
            }
        }
        for (const [self, module] of Object.entries(manifest.islands)) {
            const url = new URL(self, baseUrl).href;
            if (!url.startsWith(baseUrl)) {
                throw new TypeError("Island is not a child of the basepath.");
            }
            let path = url.substring(baseUrl.length);
            if (path.startsWith("islands")) {
                path = path.slice("islands".length + 1);
            }
            const baseRoute = path.substring(0, path.length - extname(path).length);
            for (const [exportName, exportedFunction] of Object.entries(module)) {
                if (typeof exportedFunction !== "function") {
                    continue;
                }
                const name = sanitizeIslandName(baseRoute);
                const id = `${name}_${exportName}`.toLowerCase();
                islands.push({
                    id,
                    name,
                    url,
                    component: exportedFunction,
                    exportName,
                });
            }
        }
        const staticFiles = [];
        try {
            const staticFolder = new URL(opts.staticDir ?? "./static", manifest.baseUrl);
            const entries = walk(fromFileUrl(staticFolder), {
                includeFiles: true,
                includeDirs: false,
                followSymlinks: false,
            });
            const encoder = new TextEncoder();
            for await (const entry of entries) {
                const localUrl = toFileUrl(entry.path);
                const path = localUrl.href.substring(staticFolder.href.length);
                const stat = await dntShim.Deno.stat(localUrl);
                const contentType = typeByExtension(extname(path)) ??
                    "application/octet-stream";
                const etag = await crypto.subtle.digest("SHA-1", encoder.encode(BUILD_ID + path)).then((hash) => Array.from(new Uint8Array(hash))
                    .map((byte) => byte.toString(16).padStart(2, "0"))
                    .join(""));
                const staticFile = {
                    localUrl,
                    path,
                    size: stat.size,
                    contentType,
                    etag,
                };
                staticFiles.push(staticFile);
            }
        }
        catch (err) {
            if (err.cause instanceof dntShim.Deno.errors.NotFound) {
                // Do nothing.
            }
            else {
                throw err;
            }
        }
        const dev = isDevMode();
        if (dev) {
            // Ensure that debugging hooks are set up for SSR rendering
            await import("preact/debug");
        }
        return new ServerContext(routes, islands, staticFiles, opts.render ?? DEFAULT_RENDER_FN, middlewares, app, layouts, notFound, error, opts.plugins ?? [], configPath, jsxConfig, dev, opts.router ?? DEFAULT_ROUTER_OPTIONS);
    }
    /**
     * This functions returns a request handler that handles all routes required
     * by Fresh, including static files.
     */
    handler() {
        const handlers = __classPrivateFieldGet(this, _ServerContext_instances, "m", _ServerContext_handlers).call(this);
        const inner = router.router(handlers);
        const withMiddlewares = __classPrivateFieldGet(this, _ServerContext_instances, "m", _ServerContext_composeMiddlewares).call(this, __classPrivateFieldGet(this, _ServerContext_middlewares, "f"), handlers.errorHandler, router.getParamsAndRoute(handlers));
        const trailingSlashEnabled = __classPrivateFieldGet(this, _ServerContext_routerOptions, "f")?.trailingSlash;
        return async function handler(req, connInfo = DEFAULT_CONN_INFO) {
            // Redirect requests that end with a trailing slash to their non-trailing
            // slash counterpart.
            // Ex: /about/ -> /about
            const url = new URL(req.url);
            if (url.pathname.length > 1 && url.pathname.endsWith("/") &&
                !trailingSlashEnabled) {
                // Remove trailing slashes
                const path = url.pathname.replace(/\/+$/, "");
                const location = `${path}${url.search}`;
                return new Response(null, {
                    status: Status.TemporaryRedirect,
                    headers: { location },
                });
            }
            else if (trailingSlashEnabled && !url.pathname.endsWith("/")) {
                // If the last element of the path has a "." it's a file
                const isFile = url.pathname.split("/").at(-1)?.includes(".");
                // If the path uses the internal prefix, don't redirect it
                const isInternal = url.pathname.startsWith(INTERNAL_PREFIX);
                if (!isFile && !isInternal) {
                    url.pathname += "/";
                    return Response.redirect(url, Status.PermanentRedirect);
                }
            }
            return await withMiddlewares(req, connInfo, inner);
        };
    }
}
_ServerContext_dev = new WeakMap(), _ServerContext_routes = new WeakMap(), _ServerContext_islands = new WeakMap(), _ServerContext_staticFiles = new WeakMap(), _ServerContext_renderFn = new WeakMap(), _ServerContext_middlewares = new WeakMap(), _ServerContext_app = new WeakMap(), _ServerContext_layouts = new WeakMap(), _ServerContext_notFound = new WeakMap(), _ServerContext_error = new WeakMap(), _ServerContext_plugins = new WeakMap(), _ServerContext_builder = new WeakMap(), _ServerContext_routerOptions = new WeakMap(), _ServerContext_bundleAssetRoute = new WeakMap(), _ServerContext_instances = new WeakSet(), _ServerContext_composeMiddlewares = function _ServerContext_composeMiddlewares(middlewares, errorHandler, paramsAndRoute) {
    return (req, connInfo, inner) => {
        const handlers = [];
        const paramsAndRouteResult = paramsAndRoute(req.url);
        // identify middlewares to apply, if any.
        // middlewares should be already sorted from deepest to shallow layer
        const mws = selectSharedRoutes(paramsAndRouteResult.route?.baseRoute ?? ROOT_BASE_ROUTE, middlewares);
        let state = {};
        const middlewareCtx = {
            next() {
                const handler = handlers.shift();
                try {
                    // As the `handler` can be either sync or async, depending on the user's code,
                    // the current shape of our wrapper, that is `() => handler(req, middlewareCtx)`,
                    // doesn't guarantee that all possible errors will be captured.
                    // `Promise.resolve` accept the value that should be returned to the promise
                    // chain, however, if that value is produced by the external function call,
                    // the possible `Error`, will *not* be caught by any `.catch()` attached to that chain.
                    // Because of that, we need to make sure that the produced value is pushed
                    // through the pipeline only if function was called successfully, and handle
                    // the error case manually, by returning the `Error` as rejected promise.
                    return Promise.resolve(handler());
                }
                catch (e) {
                    return Promise.reject(e);
                }
            },
            ...connInfo,
            get state() {
                return state;
            },
            set state(v) {
                state = v;
            },
            destination: "route",
            params: paramsAndRouteResult.params,
        };
        for (const { module } of mws) {
            if (module.handler instanceof Array) {
                for (const handler of module.handler) {
                    handlers.push(() => handler(req, middlewareCtx));
                }
            }
            else {
                const handler = module.handler;
                handlers.push(() => handler(req, middlewareCtx));
            }
        }
        const ctx = {
            ...connInfo,
            get state() {
                return state;
            },
            set state(v) {
                state = v;
            },
        };
        const { destination, handler } = inner(req, ctx, paramsAndRouteResult.params, paramsAndRouteResult.route);
        handlers.push(handler);
        middlewareCtx.destination = destination;
        return middlewareCtx.next().catch((e) => errorHandler(req, ctx, e));
    };
}, _ServerContext_handlers = function _ServerContext_handlers() {
    const internalRoutes = {};
    const staticRoutes = {};
    const routes = {};
    internalRoutes[`${INTERNAL_PREFIX}${JS_PREFIX}/${BUILD_ID}/:path*`] = {
        baseRoute: toBaseRoute(`${INTERNAL_PREFIX}${JS_PREFIX}/${BUILD_ID}/:path*`),
        methods: {
            default: __classPrivateFieldGet(this, _ServerContext_bundleAssetRoute, "f").call(this),
        },
    };
    if (__classPrivateFieldGet(this, _ServerContext_dev, "f")) {
        internalRoutes[REFRESH_JS_URL] = {
            baseRoute: toBaseRoute(REFRESH_JS_URL),
            methods: {
                default: () => {
                    return new Response(refreshJs(ALIVE_URL, BUILD_ID), {
                        headers: {
                            "content-type": "application/javascript; charset=utf-8",
                        },
                    });
                },
            },
        };
        internalRoutes[ALIVE_URL] = {
            baseRoute: toBaseRoute(ALIVE_URL),
            methods: {
                default: () => {
                    let timerId = undefined;
                    const body = new ReadableStream({
                        start(controller) {
                            controller.enqueue(`data: ${BUILD_ID}\nretry: 100\n\n`);
                            timerId = setInterval(() => {
                                controller.enqueue(`data: ${BUILD_ID}\n\n`);
                            }, 1000);
                        },
                        cancel() {
                            if (timerId !== undefined) {
                                clearInterval(timerId);
                            }
                        },
                    });
                    return new Response(body.pipeThrough(new TextEncoderStream()), {
                        headers: {
                            "content-type": "text/event-stream",
                        },
                    });
                },
            },
        };
    }
    // Add the static file routes.
    // each files has 2 static routes:
    // - one serving the file at its location without a "cache bursting" mechanism
    // - one containing the BUILD_ID in the path that can be cached
    for (const { localUrl, path, size, contentType, etag } of __classPrivateFieldGet(this, _ServerContext_staticFiles, "f")) {
        const route = sanitizePathToRegex(path);
        staticRoutes[route] = {
            baseRoute: toBaseRoute(route),
            methods: {
                "HEAD": __classPrivateFieldGet(this, _ServerContext_instances, "m", _ServerContext_staticFileHeadHandler).call(this, size, contentType, etag),
                "GET": __classPrivateFieldGet(this, _ServerContext_instances, "m", _ServerContext_staticFileGetHandler).call(this, localUrl, size, contentType, etag),
            },
        };
    }
    // Tell renderer about all globally available islands
    setAllIslands(__classPrivateFieldGet(this, _ServerContext_islands, "f"));
    const renderNotFound = async (req, params, 
    // deno-lint-ignore no-explicit-any
    ctx, data, error) => {
        const notFound = __classPrivateFieldGet(this, _ServerContext_notFound, "f");
        if (!notFound.component) {
            return sendResponse(["Not found.", undefined], {
                status: Status.NotFound,
                isDev: __classPrivateFieldGet(this, _ServerContext_dev, "f"),
                statusText: undefined,
                headers: undefined,
            });
        }
        const layouts = selectSharedRoutes(ROOT_BASE_ROUTE, __classPrivateFieldGet(this, _ServerContext_layouts, "f"));
        const imports = [];
        const resp = await internalRender({
            request: req,
            context: ctx,
            route: notFound,
            plugins: __classPrivateFieldGet(this, _ServerContext_plugins, "f"),
            app: __classPrivateFieldGet(this, _ServerContext_app, "f"),
            layouts,
            imports,
            dependenciesFn: (path) => __classPrivateFieldGet(this, _ServerContext_builder, "f").dependencies(path),
            renderFn: __classPrivateFieldGet(this, _ServerContext_renderFn, "f"),
            url: new URL(req.url),
            params,
            data,
            state: ctx?.state,
            error,
        });
        if (resp instanceof Response) {
            return resp;
        }
        return sendResponse(resp, {
            status: Status.NotFound,
            isDev: __classPrivateFieldGet(this, _ServerContext_dev, "f"),
            statusText: undefined,
            headers: undefined,
        });
    };
    const genRender = (route, status) => {
        const imports = [];
        if (__classPrivateFieldGet(this, _ServerContext_dev, "f"))
            imports.push(REFRESH_JS_URL);
        return (req, params, 
        // deno-lint-ignore no-explicit-any
        ctx, error) => {
            return async (data, options) => {
                if (route.component === undefined) {
                    throw new Error("This page does not have a component to render.");
                }
                const layouts = selectSharedRoutes(route.baseRoute, __classPrivateFieldGet(this, _ServerContext_layouts, "f"));
                const resp = await internalRender({
                    request: req,
                    context: {
                        ...ctx,
                        async renderNotFound() {
                            return await renderNotFound(req, params, ctx, data, error);
                        },
                    },
                    route,
                    plugins: __classPrivateFieldGet(this, _ServerContext_plugins, "f"),
                    app: __classPrivateFieldGet(this, _ServerContext_app, "f"),
                    layouts,
                    imports,
                    dependenciesFn: (path) => __classPrivateFieldGet(this, _ServerContext_builder, "f").dependencies(path),
                    renderFn: __classPrivateFieldGet(this, _ServerContext_renderFn, "f"),
                    url: new URL(req.url),
                    params,
                    data,
                    state: ctx?.state,
                    error,
                });
                if (resp instanceof Response) {
                    return resp;
                }
                return sendResponse(resp, {
                    status: options?.status ?? status,
                    statusText: options?.statusText,
                    headers: options?.headers,
                    isDev: __classPrivateFieldGet(this, _ServerContext_dev, "f"),
                });
            };
        };
    };
    for (const route of __classPrivateFieldGet(this, _ServerContext_routes, "f")) {
        if (__classPrivateFieldGet(this, _ServerContext_routerOptions, "f").trailingSlash && route.pattern != "/") {
            route.pattern += "/";
        }
        const createRender = genRender(route, Status.OK);
        if (typeof route.handler === "function") {
            routes[route.pattern] = {
                baseRoute: route.baseRoute,
                methods: {
                    default: (req, ctx, params) => route.handler(req, {
                        ...ctx,
                        params,
                        render: createRender(req, params, ctx),
                        async renderNotFound(data) {
                            return await renderNotFound(req, params, ctx, data);
                        },
                    }),
                },
            };
        }
        else {
            routes[route.pattern] = {
                baseRoute: route.baseRoute,
                methods: {},
            };
            for (const [method, handler] of Object.entries(route.handler)) {
                routes[route.pattern].methods[method] = (req, ctx, params) => handler(req, {
                    ...ctx,
                    params,
                    render: createRender(req, params, ctx),
                    async renderNotFound(data) {
                        return await renderNotFound(req, params, ctx, data);
                    },
                });
            }
        }
    }
    const otherHandler = (req, ctx) => __classPrivateFieldGet(this, _ServerContext_notFound, "f").handler(req, {
        ...ctx,
        render() {
            return renderNotFound(req, {}, ctx);
        },
    });
    const errorHandlerRender = genRender(__classPrivateFieldGet(this, _ServerContext_error, "f"), Status.InternalServerError);
    const errorHandler = (req, ctx, error) => {
        console.error("%cAn error occurred during route handling or page rendering.", "color:red", error);
        return __classPrivateFieldGet(this, _ServerContext_error, "f").handler(req, {
            ...ctx,
            error,
            render: errorHandlerRender(req, {}, undefined, error),
        });
    };
    return { internalRoutes, staticRoutes, routes, otherHandler, errorHandler };
}, _ServerContext_staticFileHeadHandler = function _ServerContext_staticFileHeadHandler(size, contentType, etag) {
    return (req) => {
        const url = new URL(req.url);
        const key = url.searchParams.get(ASSET_CACHE_BUST_KEY);
        if (key !== null && BUILD_ID !== key) {
            url.searchParams.delete(ASSET_CACHE_BUST_KEY);
            const location = url.pathname + url.search;
            return new Response(null, {
                status: 307,
                headers: {
                    location,
                },
            });
        }
        const headers = new Headers({
            "content-type": contentType,
            etag,
            vary: "If-None-Match",
        });
        if (key !== null) {
            headers.set("Cache-Control", "public, max-age=31536000, immutable");
        }
        const ifNoneMatch = req.headers.get("if-none-match");
        if (ifNoneMatch === etag || ifNoneMatch === "W/" + etag) {
            return new Response(null, { status: 304, headers });
        }
        else {
            headers.set("content-length", String(size));
            return new Response(null, { status: 200, headers });
        }
    };
}, _ServerContext_staticFileGetHandler = function _ServerContext_staticFileGetHandler(localUrl, size, contentType, etag) {
    return async (req) => {
        const url = new URL(req.url);
        const key = url.searchParams.get(ASSET_CACHE_BUST_KEY);
        if (key !== null && BUILD_ID !== key) {
            url.searchParams.delete(ASSET_CACHE_BUST_KEY);
            const location = url.pathname + url.search;
            return new Response("", {
                status: 307,
                headers: {
                    "content-type": "text/plain",
                    location,
                },
            });
        }
        const headers = new Headers({
            "content-type": contentType,
            etag,
            vary: "If-None-Match",
        });
        if (key !== null) {
            headers.set("Cache-Control", "public, max-age=31536000, immutable");
        }
        const ifNoneMatch = req.headers.get("if-none-match");
        if (ifNoneMatch === etag || ifNoneMatch === "W/" + etag) {
            return new Response(null, { status: 304, headers });
        }
        else {
            const file = await dntShim.Deno.open(localUrl);
            headers.set("content-length", String(size));
            return new Response(file.readable, { headers });
        }
    };
};
const DEFAULT_ROUTER_OPTIONS = {
    trailingSlash: false,
};
const DEFAULT_APP = {
    default: ({ Component }) => h(Component, {}),
};
const DEFAULT_NOT_FOUND = {
    baseRoute: toBaseRoute("/"),
    pattern: "",
    url: "",
    name: "_404",
    handler: (req) => router.defaultOtherHandler(req),
    csp: false,
    appWrapper: true,
    inheritLayouts: true,
};
const DEFAULT_ERROR = {
    baseRoute: toBaseRoute("/"),
    pattern: "",
    url: "",
    name: "_500",
    component: DefaultErrorHandler,
    handler: (_req, ctx) => ctx.render(),
    csp: false,
    appWrapper: true,
    inheritLayouts: true,
};
export function selectSharedRoutes(curBaseRoute, items) {
    const selected = [];
    for (const item of items) {
        const { baseRoute } = item;
        const res = curBaseRoute === baseRoute ||
            curBaseRoute.startsWith(baseRoute.length > 1 ? baseRoute + "/" : baseRoute);
        if (res) {
            selected.push(item);
        }
    }
    return selected;
}
const APP_REG = /_app\.[tj]sx?$/;
/**
 * Sort route paths where special Fresh files like `_app`,
 * `_layout` and `_middleware` are sorted in front.
 */
export function sortRoutePaths(a, b) {
    // The `_app` route should always be the first
    if (APP_REG.test(a))
        return -1;
    else if (APP_REG.test(b))
        return 1;
    let segmentIdx = 0;
    const aLen = a.length;
    const bLen = b.length;
    const maxLen = aLen > bLen ? aLen : bLen;
    for (let i = 0; i < maxLen; i++) {
        const charA = a.charAt(i);
        const charB = b.charAt(i);
        const nextA = i + 1 < aLen ? a.charAt(i + 1) : "";
        const nextB = i + 1 < bLen ? b.charAt(i + 1) : "";
        if (charA === "/" || charB === "/") {
            segmentIdx = i;
            // If the other path doesn't close the segment
            // then we don't need to continue
            if (charA !== "/")
                return -1;
            if (charB !== "/")
                return 1;
            continue;
        }
        if (i === segmentIdx + 1) {
            const scoreA = getRoutePathScore(charA, nextA);
            const scoreB = getRoutePathScore(charB, nextB);
            if (scoreA === scoreB)
                continue;
            return scoreA > scoreB ? -1 : 1;
        }
    }
    return 0;
}
/**
 * Assign a score based on the first two characters of a path segment.
 * The goal is to sort `_middleware` and `_layout` in front of everything
 * and `[` or `[...` last respectively.
 */
function getRoutePathScore(char, nextChar) {
    if (char === "_") {
        if (nextChar === "m")
            return 4;
        return 3;
    }
    else if (char === "[") {
        if (nextChar === ".") {
            return 0;
        }
        return 1;
    }
    return 2;
}
/** Transform a filesystem URL path to a `path-to-regex` style matcher. */
export function pathToPattern(path) {
    const parts = path.split("/");
    if (parts[parts.length - 1] === "index") {
        if (parts.length === 1) {
            return "/";
        }
        parts.pop();
    }
    let route = "";
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        // Case: /[...foo].tsx
        if (part.startsWith("[...") && part.endsWith("]")) {
            route += `/:${part.slice(4, part.length - 1)}*`;
            continue;
        }
        // Route groups like /foo/(bar) should not be included in URL
        // matching. They are transparent and need to be removed here.
        // Case: /foo/(bar) -> /foo
        // Case: /foo/(bar)/bob -> /foo/bob
        // Case: /(foo)/bar -> /bar
        if (part.startsWith("(") && part.endsWith(")")) {
            continue;
        }
        // Disallow neighbouring params like `/[id][bar].tsx` because
        // it's ambiguous where the `id` param ends and `bar` begins.
        if (part.includes("][")) {
            throw new SyntaxError(`Invalid route pattern: "${path}". A parameter cannot be followed by another parameter without any characters in between.`);
        }
        // Case: /[id].tsx
        // Case: /[id]@[bar].tsx
        // Case: /[id]-asdf.tsx
        // Case: /[id]-asdf[bar].tsx
        // Case: /asdf[bar].tsx
        let pattern = "";
        let groupOpen = 0;
        for (let j = 0; j < part.length; j++) {
            const char = part[j];
            if (char === "[") {
                pattern += ":";
                groupOpen++;
            }
            else if (char === "]") {
                if (--groupOpen < 0) {
                    throw new SyntaxError(`Invalid route pattern: "${path}"`);
                }
            }
            else {
                pattern += char;
            }
        }
        route += "/" + pattern;
    }
    return route;
}
// Normalize a path for use in a URL. Returns null if the path is unparsable.
export function normalizeURLPath(path) {
    try {
        const pathUrl = new URL("file:///");
        pathUrl.pathname = path;
        return pathUrl.pathname;
    }
    catch {
        return null;
    }
}
function sanitizePathToRegex(path) {
    return path
        .replaceAll("\*", "\\*")
        .replaceAll("\+", "\\+")
        .replaceAll("\?", "\\?")
        .replaceAll("\{", "\\{")
        .replaceAll("\}", "\\}")
        .replaceAll("\(", "\\(")
        .replaceAll("\)", "\\)")
        .replaceAll("\:", "\\:");
}
function toPascalCase(text) {
    return text.replace(/(^\w|-\w)/g, (substring) => substring.replace(/-/, "").toUpperCase());
}
function sanitizeIslandName(name) {
    const fileName = name.replaceAll(/[/\\\\\(\)]/g, "_");
    return toPascalCase(fileName);
}
function serializeCSPDirectives(csp) {
    return Object.entries(csp)
        .filter(([_key, value]) => value !== undefined)
        .map(([k, v]) => {
        // Turn camel case into snake case.
        const key = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
        const value = Array.isArray(v) ? v.join(" ") : v;
        return `${key} ${value}`;
    })
        .join("; ");
}
export function toBaseRoute(input) {
    if (input.endsWith("_layout")) {
        input = input.slice(0, -"_layout".length);
    }
    else if (input.endsWith("_middleware")) {
        input = input.slice(0, -"_middleware".length);
    }
    else if (input.endsWith("index")) {
        input = input.slice(0, -"index".length);
    }
    if (input.endsWith("/")) {
        input = input.slice(0, -1);
    }
    const suffix = !input.startsWith("/") ? "/" : "";
    return (suffix + input);
}
function refreshJs(aliveUrl, buildId) {
    return `let es = new EventSource("${aliveUrl}");
window.addEventListener("beforeunload", (event) => {
  es.close();
});
es.addEventListener("message", function listener(e) {
  if (e.data !== "${buildId}") {
    this.removeEventListener("message", listener);
    location.reload();
  }
});`;
}
function collectEntrypoints(dev, islands, plugins) {
    const entrypointBase = "../runtime/entrypoints";
    const entryPoints = {
        main: dev
            ? new URL(`${entrypointBase}/main_dev.ts`, import.meta.url).href : new URL(`${entrypointBase}/main.ts`, import.meta.url).href,
        deserializer: new URL(`${entrypointBase}/deserializer.ts`, import.meta.url).href,
    };
    try {
        new URL("@preact/signals", import.meta.url).href;
        entryPoints.signals = new URL(`${entrypointBase}/signals.ts`, import.meta.url).href;
    }
    catch {
        // @preact/signals is not in the import map
    }
    for (const island of islands) {
        entryPoints[`island-${island.id}`] = island.url;
    }
    for (const plugin of plugins) {
        for (const [name, url] of Object.entries(plugin.entrypoints ?? {})) {
            entryPoints[`plugin-${plugin.name}-${name}`] = url;
        }
    }
    return entryPoints;
}
async function readDenoConfig(directory) {
    let dir = directory;
    while (true) {
        for (const name of ["deno.json", "deno.jsonc"]) {
            const path = join(dir, name);
            try {
                const file = await dntShim.Deno.readTextFile(path);
                if (name.endsWith(".jsonc")) {
                    return { config: JSONC.parse(file), path };
                }
                else {
                    return { config: JSON.parse(file), path };
                }
            }
            catch (err) {
                if (!(err instanceof dntShim.Deno.errors.NotFound)) {
                    throw err;
                }
            }
        }
        const parent = dirname(dir);
        if (parent === dir) {
            throw new Error(`Could not find a deno.json file in the current directory or any parent directory.`);
        }
        dir = parent;
    }
}
function formatMiddlewarePath(path) {
    const prefix = !path.startsWith("/") ? "/" : "";
    const suffix = !path.endsWith("/") ? "/" : "";
    return prefix + path + suffix;
}
function getMiddlewareRoutesFromPlugins(plugins) {
    const middlewares = plugins.flatMap((plugin) => plugin.middlewares ?? []);
    const mws = {};
    for (let i = 0; i < middlewares.length; i++) {
        const mw = middlewares[i];
        const handler = mw.middleware.handler;
        const key = `./routes${formatMiddlewarePath(mw.path)}_middleware.ts`;
        if (!mws[key])
            mws[key] = [key, { handler: [] }];
        mws[key][1].handler.push(...Array.isArray(handler) ? handler : [handler]);
    }
    return Object.values(mws);
}
function formatRoutePath(path) {
    return path.startsWith("/") ? path : "/" + path;
}
function getRoutesFromPlugins(plugins) {
    return plugins.flatMap((plugin) => plugin.routes ?? [])
        .map((route) => {
        return [`./routes${formatRoutePath(route.path)}.ts`, {
                // deno-lint-ignore no-explicit-any
                default: route.component,
                handler: route.handler,
            }];
    });
}
function sendResponse(resp, options) {
    const headers = {
        "content-type": "text/html; charset=utf-8",
    };
    const [body, csp] = resp;
    if (csp) {
        if (options.isDev) {
            csp.directives.connectSrc = [
                ...(csp.directives.connectSrc ?? []),
                SELF,
            ];
        }
        const directive = serializeCSPDirectives(csp.directives);
        if (csp.reportOnly) {
            headers["content-security-policy-report-only"] = directive;
        }
        else {
            headers["content-security-policy"] = directive;
        }
    }
    return new Response(body, {
        status: options.status,
        statusText: options.statusText,
        headers: options.headers ? { ...headers, ...options.headers } : headers,
    });
}
