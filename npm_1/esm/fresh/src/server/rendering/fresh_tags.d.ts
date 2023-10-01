import { RenderState } from "./state.js";
import { Plugin, PluginRenderResult } from "../types.js";
import { ContentSecurityPolicy } from "../../runtime/csp.js";
export declare function renderFreshTags(renderState: RenderState, opts: {
    bodyHtml: string;
    csp?: ContentSecurityPolicy;
    imports: string[];
    randomNonce?: string;
    dependenciesFn: (path: string) => string[];
    styles: string[];
    pluginRenderResults: [Plugin, PluginRenderResult][];
}): {
    bodyHtml: string;
    preloadSet: Set<string>;
    moduleScripts: [string, string][];
};
