import { compare } from "./compare.js";
export function rsort(list, options) {
    return list.sort((a, b) => compare(b, a, options));
}
