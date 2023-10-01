import { compare } from "./compare.ts";
export function rsort(list, options) {
    return list.sort((a, b) => compare(b, a, options));
}
