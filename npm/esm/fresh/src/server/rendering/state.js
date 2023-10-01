export class RenderState {
    constructor(routeOptions, 
    // deno-lint-ignore no-explicit-any
    componentStack, csp, error) {
        // deno-lint-ignore no-explicit-any
        Object.defineProperty(this, "componentStack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "renderingUserTemplate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "encounteredIslands", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Set()
        });
        Object.defineProperty(this, "islandProps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "slots", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        Object.defineProperty(this, "headChildren", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "renderedHtmlTag", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        // deno-lint-ignore no-explicit-any
        Object.defineProperty(this, "docTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "docHtml", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "docHead", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "docBody", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "docHeadNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "headVNodes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        // Route options
        Object.defineProperty(this, "routeOptions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "csp", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        // Preact state
        Object.defineProperty(this, "ownerStack", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "owners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
        this.routeOptions = routeOptions;
        this.csp = csp;
        this.componentStack = componentStack;
        if (error)
            this.routeOptions.error = error;
    }
    clearTmpState() {
        this.renderingUserTemplate = false;
        this.ownerStack = [];
        this.owners.clear();
    }
}
