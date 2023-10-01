import { outside } from "./outside.js";
export function gtr(version, range, options) {
    return outside(version, range, ">", options);
}
