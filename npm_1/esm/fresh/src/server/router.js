export const knownMethods = [
    "GET",
    "HEAD",
    "POST",
    "PUT",
    "DELETE",
    "OPTIONS",
    "PATCH",
];
export function defaultOtherHandler(_req) {
    return new Response(null, {
        status: 404,
    });
}
export function defaultErrorHandler(_req, _ctx, err) {
    console.error(err);
    return new Response(null, {
        status: 500,
    });
}
export function defaultUnknownMethodHandler(_req, _ctx, knownMethods) {
    return new Response(null, {
        status: 405,
        headers: {
            Accept: knownMethods.join(", "),
        },
    });
}
function processRoutes(processedRoutes, routes, destination) {
    for (const [path, def] of Object.entries(routes)) {
        const entry = {
            baseRoute: def.baseRoute,
            pattern: new URLPattern({ pathname: path }),
            methods: {},
            default: undefined,
            destination,
        };
        for (const [method, handler] of Object.entries(def.methods)) {
            if (method === "default") {
                entry.default = handler;
            }
            else if (knownMethods.includes(method)) {
                entry.methods[method] = handler;
            }
        }
        processedRoutes.push(entry);
    }
}
export function getParamsAndRoute({ internalRoutes, staticRoutes, routes, }) {
    const processedRoutes = [];
    processRoutes(processedRoutes, internalRoutes, "internal");
    processRoutes(processedRoutes, staticRoutes, "static");
    processRoutes(processedRoutes, routes, "route");
    return (url) => {
        for (const route of processedRoutes) {
            const res = route.pattern.exec(url);
            if (res !== null) {
                const groups = {};
                const matched = res?.pathname.groups;
                for (const key in matched) {
                    const value = matched[key];
                    if (value !== undefined) {
                        groups[key] = decodeURIComponent(value);
                    }
                }
                return { route: route, params: groups };
            }
        }
        return {
            route: undefined,
            params: {},
        };
    };
}
export function router({ otherHandler, unknownMethodHandler, }) {
    unknownMethodHandler ??= defaultUnknownMethodHandler;
    return (req, ctx, groups, route) => {
        if (route) {
            const res = route.pattern.exec(req.url);
            if (res !== null) {
                // If not overridden, HEAD requests should be handled as GET requests but without the body.
                if (req.method === "HEAD" && !route.methods["HEAD"]) {
                    req = new Request(req.url, { method: "GET", headers: req.headers });
                }
                for (const [method, handler] of Object.entries(route.methods)) {
                    if (req.method === method) {
                        return {
                            destination: route.destination,
                            handler: () => handler(req, ctx, groups),
                        };
                    }
                }
                if (route.default) {
                    return {
                        destination: route.destination,
                        handler: () => route.default(req, ctx, groups),
                    };
                }
                else {
                    return {
                        destination: route.destination,
                        handler: () => unknownMethodHandler(req, ctx, Object.keys(route.methods)),
                    };
                }
            }
        }
        return {
            destination: "notFound",
            handler: () => otherHandler(req, ctx),
        };
    };
}
