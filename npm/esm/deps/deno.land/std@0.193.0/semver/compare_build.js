import { parse } from "./parse.js";
import { checkIdentifier, compareIdentifier, compareNumber, } from "./_shared.js";
export function compareBuild(s0, s1, _options) {
    const v0 = parse(s0);
    const v1 = parse(s1);
    if (s0 === s1)
        return 0;
    return (compareNumber(v0.major, v1.major) ||
        compareNumber(v0.minor, v1.minor) ||
        compareNumber(v0.patch, v1.patch) ||
        checkIdentifier(v0.prerelease, v1.prerelease) ||
        compareIdentifier(v0.prerelease, v1.prerelease) ||
        checkIdentifier(v1.build, v0.build) ||
        compareIdentifier(v0.build, v1.build));
}
