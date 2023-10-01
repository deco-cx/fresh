import { outside } from "./outside.ts";
export function gtr(version, range, options) {
    return outside(version, range, ">", options);
}
