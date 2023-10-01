import { checkAsyncComponent } from "./render.ts";
export function defineConfig(config) {
    return config;
}
// Route creation helpers
export function defineRoute(fn) {
    // deno-lint-ignore no-explicit-any
    if (checkAsyncComponent(fn))
        return fn;
    // deno-lint-ignore require-await
    return async (req, ctx) => fn(req, ctx);
}
// Layout creation helper
export function defineLayout(fn) {
    // deno-lint-ignore no-explicit-any
    if (checkAsyncComponent(fn))
        return fn;
    // deno-lint-ignore require-await
    return async (req, ctx) => fn(req, ctx);
}
// App creation helper
export function defineApp(fn) {
    // deno-lint-ignore no-explicit-any
    if (checkAsyncComponent(fn))
        return fn;
    // deno-lint-ignore require-await
    return async (req, ctx) => fn(req, ctx);
}
