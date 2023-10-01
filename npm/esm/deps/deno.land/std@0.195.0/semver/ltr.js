import { outside } from "./outside.js";
export function ltr(version, range, options) {
    return outside(version, range, "<", options);
}
