import { parse } from "./parse.ts";
import { checkIdentifier, compareIdentifier, compareNumber, } from "./_shared.ts";
export function compare(s0, s1, options) {
    const v0 = parse(s0, options);
    const v1 = parse(s1, options);
    const includePrerelease = options?.includePrerelease ?? true;
    if (s0 === s1)
        return 0;
    if (includePrerelease) {
        return (compareNumber(v0.major, v1.major) ||
            compareNumber(v0.minor, v1.minor) ||
            compareNumber(v0.patch, v1.patch) ||
            checkIdentifier(v0.prerelease, v1.prerelease) ||
            compareIdentifier(v0.prerelease, v1.prerelease));
    }
    else {
        return (compareNumber(v0.major, v1.major) ||
            compareNumber(v0.minor, v1.minor) ||
            compareNumber(v0.patch, v1.patch));
    }
}
