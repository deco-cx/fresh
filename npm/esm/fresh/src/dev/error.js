import * as dntShim from "../../../_dnt.shims.js";
export function printError(message) {
    console.error(`%cerror%c: ${message}`, "color: red; font-weight: bold", "");
}
export function error(message) {
    printError(message);
    dntShim.Deno.exit(1);
}
