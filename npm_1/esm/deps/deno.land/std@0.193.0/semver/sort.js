import { compare } from "./compare.js";
export function sort(list, options) {
    return list.sort((a, b) => compare(a, b, options));
}
