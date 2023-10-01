import { AppModule, AsyncLayout, AsyncRoute, ErrorPage, LayoutRoute, Plugin, RenderFunction, Route, UnknownPage } from "./types.js";
import { ContentSecurityPolicy } from "../runtime/csp.js";
export declare const DEFAULT_RENDER_FN: RenderFunction;
export interface RenderOptions<Data> {
    request: Request;
    context: any;
    route: Route<Data> | UnknownPage | ErrorPage;
    plugins: Plugin[];
    app: AppModule;
    layouts: LayoutRoute[];
    imports: string[];
    dependenciesFn: (path: string) => string[];
    url: URL;
    params: Record<string, string | string[]>;
    renderFn: RenderFunction;
    data?: Data;
    state?: Record<string, unknown>;
    error?: unknown;
    lang?: string;
}
export type InnerRenderFunction = () => string;
export declare class RenderContext {
    #private;
    constructor(id: string, url: URL, route: string, lang: string);
    /** A unique ID for this logical JIT render. */
    get id(): string;
    /**
     * State that is persisted between multiple renders with the same render
     * context. This is useful because one logical JIT render could have multiple
     * preact render passes due to suspense.
     */
    get state(): Map<string, unknown>;
    /**
     * All of the CSS style rules that should be inlined into the document.
     * Adding to this list across multiple renders is supported (even across
     * suspense!). The CSS rules will always be inserted on the client in the
     * order specified here.
     */
    get styles(): string[];
    /** The URL of the page being rendered. */
    get url(): URL;
    /** The route matcher (e.g. /blog/:id) that the request matched for this page
     * to be rendered. */
    get route(): string;
    /** The language of the page being rendered. Defaults to "en". */
    get lang(): string;
    set lang(lang: string);
}
export declare function checkAsyncComponent<T>(component: unknown): component is AsyncRoute<T> | AsyncLayout<T>;
/**
 * This function renders out a page. Rendering is synchronous and non streaming.
 * Suspense boundaries are not supported.
 */
export declare function render<Data>(opts: RenderOptions<Data>): Promise<[string, ContentSecurityPolicy | undefined] | Response>;
