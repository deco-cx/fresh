import { type ComponentChildren, type VNode } from "preact";
import { Island } from "../types.js";
import { ContentSecurityPolicy } from "../../runtime/csp.js";
export interface RenderStateRouteOptions {
    url: URL;
    route: string;
    data?: any;
    state?: any;
    error?: unknown;
    params: Record<string, string | string[]>;
}
export declare class RenderState {
    componentStack: any[];
    renderingUserTemplate: boolean;
    encounteredIslands: Set<Island>;
    islandProps: unknown[];
    slots: Map<string, ComponentChildren>;
    headChildren: boolean;
    renderedHtmlTag: boolean;
    docTitle: VNode<any> | null;
    docHtml: Record<string, unknown> | null;
    docHead: Record<string, unknown> | null;
    docBody: Record<string, unknown> | null;
    docHeadNodes: {
        type: string;
        props: Record<string, unknown>;
    }[];
    headVNodes: ComponentChildren[];
    routeOptions: RenderStateRouteOptions;
    csp: ContentSecurityPolicy | undefined;
    ownerStack: VNode[];
    owners: Map<VNode, VNode>;
    constructor(routeOptions: RenderStateRouteOptions, componentStack: any[], csp?: ContentSecurityPolicy, error?: unknown);
    clearTmpState(): void;
}
