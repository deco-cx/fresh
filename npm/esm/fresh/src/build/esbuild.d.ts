import { esbuild } from "./deps.js";
import { Builder } from "./mod.js";
export interface EsbuildBuilderOptions {
    /** The build ID. */
    buildID: string;
    /** The entrypoints, mapped from name to URL. */
    entrypoints: Record<string, string>;
    /** Whether or not this is a dev build. */
    dev: boolean;
    /** The path to the deno.json / deno.jsonc config file. */
    configPath: string;
    /** The JSX configuration. */
    jsxConfig: JSXConfig;
    partialOpts?: Partial<Parameters<(typeof esbuild)["build"]>[0]>;
}
export interface JSXConfig {
    jsx: "react" | "react-jsx";
    jsxImportSource?: string;
}
export declare class EsbuildBuilder implements Builder {
    #private;
    constructor(options: EsbuildBuilderOptions);
    read(path: string): Promise<any>;
    dependencies(path: string): string[];
    build(): Promise<void>;
}
