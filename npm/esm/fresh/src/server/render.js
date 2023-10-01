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
var _RenderContext_id, _RenderContext_state, _RenderContext_styles, _RenderContext_url, _RenderContext_route, _RenderContext_lang;
import { h } from "preact";
import { NONE, UNSAFE_INLINE } from "../runtime/csp.ts";
import { RenderState } from "./rendering/state.ts";
import { renderHtml, renderOuterDocument } from "./rendering/template.ts";
import { renderFreshTags } from "./rendering/fresh_tags.ts";
export const DEFAULT_RENDER_FN = (_ctx, render) => {
    render();
};
export class RenderContext {
    constructor(id, url, route, lang) {
        _RenderContext_id.set(this, void 0);
        _RenderContext_state.set(this, new Map());
        _RenderContext_styles.set(this, []);
        _RenderContext_url.set(this, void 0);
        _RenderContext_route.set(this, void 0);
        _RenderContext_lang.set(this, void 0);
        __classPrivateFieldSet(this, _RenderContext_id, id, "f");
        __classPrivateFieldSet(this, _RenderContext_url, url, "f");
        __classPrivateFieldSet(this, _RenderContext_route, route, "f");
        __classPrivateFieldSet(this, _RenderContext_lang, lang, "f");
    }
    /** A unique ID for this logical JIT render. */
    get id() {
        return __classPrivateFieldGet(this, _RenderContext_id, "f");
    }
    /**
     * State that is persisted between multiple renders with the same render
     * context. This is useful because one logical JIT render could have multiple
     * preact render passes due to suspense.
     */
    get state() {
        return __classPrivateFieldGet(this, _RenderContext_state, "f");
    }
    /**
     * All of the CSS style rules that should be inlined into the document.
     * Adding to this list across multiple renders is supported (even across
     * suspense!). The CSS rules will always be inserted on the client in the
     * order specified here.
     */
    get styles() {
        return __classPrivateFieldGet(this, _RenderContext_styles, "f");
    }
    /** The URL of the page being rendered. */
    get url() {
        return __classPrivateFieldGet(this, _RenderContext_url, "f");
    }
    /** The route matcher (e.g. /blog/:id) that the request matched for this page
     * to be rendered. */
    get route() {
        return __classPrivateFieldGet(this, _RenderContext_route, "f");
    }
    /** The language of the page being rendered. Defaults to "en". */
    get lang() {
        return __classPrivateFieldGet(this, _RenderContext_lang, "f");
    }
    set lang(lang) {
        __classPrivateFieldSet(this, _RenderContext_lang, lang, "f");
    }
}
_RenderContext_id = new WeakMap(), _RenderContext_state = new WeakMap(), _RenderContext_styles = new WeakMap(), _RenderContext_url = new WeakMap(), _RenderContext_route = new WeakMap(), _RenderContext_lang = new WeakMap();
function defaultCsp() {
    return {
        directives: { defaultSrc: [NONE], styleSrc: [UNSAFE_INLINE] },
        reportOnly: false,
    };
}
export function checkAsyncComponent(component) {
    return typeof component === "function" &&
        component.constructor.name === "AsyncFunction";
}
/**
 * This function renders out a page. Rendering is synchronous and non streaming.
 * Suspense boundaries are not supported.
 */
export async function render(opts) {
    const component = opts.route.component;
    // Only inherit layouts up to the nearest root layout.
    // Note that the route itself can act as the root layout.
    let layouts = opts.layouts;
    if (opts.route.inheritLayouts) {
        let rootIdx = 0;
        let layoutIdx = opts.layouts.length;
        while (layoutIdx--) {
            if (!opts.layouts[layoutIdx].inheritLayouts) {
                rootIdx = layoutIdx;
                break;
            }
        }
        layouts = opts.layouts.slice(rootIdx);
    }
    else {
        layouts = [];
    }
    const props = {
        params: opts.params,
        url: opts.url,
        route: opts.route.pattern,
        data: opts.data,
        state: opts.state,
    };
    if (opts.error) {
        props.error = opts.error;
    }
    const csp = opts.route.csp
        ? defaultCsp()
        : undefined;
    if (csp) {
        // Clear the csp
        const newCsp = defaultCsp();
        csp.directives = newCsp.directives;
        csp.reportOnly = newCsp.reportOnly;
    }
    const ctx = new RenderContext(crypto.randomUUID(), opts.url, opts.route.pattern, opts.lang ?? "en");
    const context = {
        localAddr: opts.context.localAddr,
        remoteAddr: opts.context.remoteAddr,
        renderNotFound: opts.context.renderNotFound,
        url: opts.url,
        route: opts.route.pattern,
        params: opts.params,
        state: opts.state ?? {},
        data: opts.data,
    };
    // Prepare render order
    // deno-lint-ignore no-explicit-any
    const renderStack = [];
    // Check if appLayout is enabled
    if (opts.route.appWrapper &&
        layouts.every((layout) => layout.appWrapper)) {
        renderStack.push(opts.app.default);
    }
    for (let i = 0; i < layouts.length; i++) {
        renderStack.push(layouts[i].component);
    }
    renderStack.push(component);
    // Build the final stack of component functions
    const componentStack = new Array(renderStack.length).fill(null);
    for (let i = 0; i < renderStack.length; i++) {
        const fn = renderStack[i];
        if (!fn)
            continue;
        if (checkAsyncComponent(fn)) {
            // Don't pass <Component /> when it's the route component
            const isRouteComponent = fn === component;
            const componentCtx = isRouteComponent ? context : {
                ...context,
                Component() {
                    return h(componentStack[i + 1], props);
                },
            };
            // deno-lint-ignore no-explicit-any
            const res = await fn(opts.request, componentCtx);
            // Bail out of rendering if we returned a response
            if (res instanceof Response) {
                return res;
            }
            const componentFn = () => res;
            // Set displayName to make debugging easier
            // deno-lint-ignore no-explicit-any
            componentFn.displayName = fn.displayName || fn.name;
            componentStack[i] = componentFn;
        }
        else {
            componentStack[i] = fn;
        }
    }
    // CAREFUL: Rendering is synchronous internally and all state
    // should be managed through the `RenderState` instance. That
    // ensures that each render request is associated with the same
    // data.
    const renderState = new RenderState({
        url: opts.url,
        route: opts.route.pattern,
        data: opts.data,
        state: opts.state,
        params: opts.params,
    }, componentStack, csp, opts.error);
    let bodyHtml = null;
    const syncPlugins = opts.plugins.filter((p) => p.render);
    const renderResults = [];
    function renderSync() {
        const plugin = syncPlugins.shift();
        if (plugin) {
            const res = plugin.render({ render: renderSync });
            if (res === undefined) {
                throw new Error(`${plugin?.name}'s render hook did not return a PluginRenderResult object.`);
            }
            renderResults.push([plugin, res]);
        }
        else {
            bodyHtml = renderHtml(renderState);
        }
        if (bodyHtml === null) {
            throw new Error(`The 'render' function was not called by ${plugin?.name}'s render hook.`);
        }
        return {
            htmlText: bodyHtml,
            requiresHydration: renderState.encounteredIslands.size > 0,
        };
    }
    const asyncPlugins = opts.plugins.filter((p) => p.renderAsync);
    let asyncRenderResponse;
    async function renderAsync() {
        const plugin = asyncPlugins.shift();
        if (plugin) {
            const res = await plugin.renderAsync({ renderAsync });
            if (res === undefined) {
                throw new Error(`${plugin?.name}'s async render hook did not return a PluginRenderResult object.`);
            }
            renderResults.push([plugin, res]);
            if (bodyHtml === null) {
                throw new Error(`The 'renderAsync' function was not called by ${plugin?.name}'s async render hook.`);
            }
        }
        else {
            await opts.renderFn(ctx, () => renderSync().htmlText);
            if (bodyHtml === null) {
                throw new Error(`The 'render' function was not called by the legacy async render hook.`);
            }
        }
        return {
            htmlText: bodyHtml,
            requiresHydration: renderState.encounteredIslands.size > 0,
        };
    }
    await renderAsync();
    const idx = renderState.headVNodes.findIndex((vnode) => vnode !== null && typeof vnode === "object" && "type" in vnode &&
        props !== null && vnode.type === "title");
    if (idx !== -1) {
        renderState.docTitle = renderState.headVNodes[idx];
        renderState.headVNodes.splice(idx, 1);
    }
    if (asyncRenderResponse !== undefined) {
        return asyncRenderResponse;
    }
    // Includes everything inside `<body>`
    bodyHtml = bodyHtml;
    // Create Fresh script + style tags
    const result = renderFreshTags(renderState, {
        bodyHtml,
        imports: opts.imports,
        csp,
        dependenciesFn: opts.dependenciesFn,
        styles: ctx.styles,
        pluginRenderResults: renderResults,
    });
    // Render outer document up to `<body>`
    const html = renderOuterDocument(renderState, {
        bodyHtml: result.bodyHtml,
        preloads: [...result.preloadSet],
        moduleScripts: result.moduleScripts,
        lang: ctx.lang,
    });
    return [html, csp];
}
