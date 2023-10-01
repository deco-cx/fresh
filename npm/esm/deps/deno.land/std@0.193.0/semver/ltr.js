import { outside } from "./outside.ts";
export function ltr(version, range, options) {
    return outside(version, range, "<", options);
}
