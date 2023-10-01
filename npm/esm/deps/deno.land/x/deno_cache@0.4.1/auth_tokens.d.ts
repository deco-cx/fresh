/// <reference types="node" />
export declare function splitLast(value: string, delimiter: string): [string, string];
export declare class AuthTokens {
    #private;
    constructor(tokensStr?: string);
    get(specifier: URL): string | undefined;
}
