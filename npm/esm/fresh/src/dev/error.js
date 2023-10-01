import * as dntShim from "../../../_dnt.shims.ts";
export function printError(message) {
    console.error(`%cerror%c: ${message}`, "color: red; font-weight: bold", "");
}
export function error(message) {
    printError(message);
    dntShim.Deno.exit(1);
}
