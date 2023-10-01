import { RenderState } from "./state.js";
export declare function renderHtml(state: RenderState): any;
export declare function renderOuterDocument(state: RenderState, opts: {
    bodyHtml: string;
    lang?: string;
    preloads: string[];
    moduleScripts: [src: string, nonce: string][];
}): string;
