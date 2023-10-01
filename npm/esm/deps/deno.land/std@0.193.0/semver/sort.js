import { compare } from "./compare.ts";
export function sort(list, options) {
    return list.sort((a, b) => compare(a, b, options));
}
