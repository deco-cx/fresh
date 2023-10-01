import { RenderState } from "./state.ts";
import { Plugin, PluginRenderResult } from "../types.ts";
import { ContentSecurityPolicy } from "../../runtime/csp.ts";
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
