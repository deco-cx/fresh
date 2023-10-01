export function printError(message) {
    console.error(`%cerror%c: ${message}`, "color: red; font-weight: bold", "");
}
export function error(message) {
    printError(message);
    Deno.exit(1);
}
