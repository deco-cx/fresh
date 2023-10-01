import { parse } from "./parse.js";
import { format } from "./format.js";
function pre(prerelease, identifier) {
    let values = [...prerelease];
    // In reality this will either be 0, 1 or 2 entries.
    let i = values.length;
    while (--i >= 0) {
        if (typeof values[i] === "number") {
            // deno-fmt-ignore
            values[i]++;
            i = -2;
        }
    }
    if (i === -1) {
        // didn't increment anything
        values.push(0);
    }
    if (identifier) {
        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
        // 1.2.0-beta.foobar or 1.2.0-beta bumps to 1.2.0-beta.0
        if (values[0] === identifier) {
            if (isNaN(values[1])) {
                values = [identifier, 0];
            }
        }
        else {
            values = [identifier, 0];
        }
    }
    return values;
}
function parseBuild(build, metadata) {
    return metadata === undefined ? build : metadata.split(".").filter((m) => m);
}
export function increment(version, release, optionsOrPrerelease, buildOrPrerelease, buildOrUndefined) {
    let options = { includePrerelease: true };
    let prerelease;
    let build;
    if (typeof optionsOrPrerelease === "object") {
        options = optionsOrPrerelease;
        prerelease = buildOrPrerelease;
        build = buildOrUndefined;
    }
    else {
        prerelease = optionsOrPrerelease;
        build = buildOrPrerelease;
    }
    let isLegacy = false;
    if (typeof version === "string") {
        version = parse(version, options);
        isLegacy = true;
    }
    let result;
    switch (release) {
        case "premajor":
            result = {
                major: version.major + 1,
                minor: 0,
                patch: 0,
                prerelease: pre(version.prerelease, prerelease),
                build: parseBuild(version.build, build),
            };
            break;
        case "preminor":
            result = {
                major: version.major,
                minor: version.minor + 1,
                patch: 0,
                prerelease: pre(version.prerelease, prerelease),
                build: parseBuild(version.build, build),
            };
            break;
        case "prepatch":
            result = {
                major: version.major,
                minor: version.minor,
                patch: version.patch + 1,
                prerelease: pre(version.prerelease, prerelease),
                build: parseBuild(version.build, build),
            };
            break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
            if (version.prerelease.length === 0) {
                result = {
                    major: version.major,
                    minor: version.minor,
                    patch: version.patch + 1,
                    prerelease: pre(version.prerelease, prerelease),
                    build: parseBuild(version.build, build),
                };
                break;
            }
            else {
                result = {
                    major: version.major,
                    minor: version.minor,
                    patch: version.patch,
                    prerelease: pre(version.prerelease, prerelease),
                    build: parseBuild(version.build, build),
                };
                break;
            }
        case "major":
            // If this is a pre-major version, bump up to the same major version.
            // Otherwise increment major.
            // 1.0.0-5 bumps to 1.0.0
            // 1.1.0 bumps to 2.0.0
            if (version.minor !== 0 ||
                version.patch !== 0 ||
                version.prerelease.length === 0) {
                result = {
                    major: version.major + 1,
                    minor: 0,
                    patch: 0,
                    prerelease: [],
                    build: parseBuild(version.build, build),
                };
                break;
            }
            else {
                result = {
                    major: version.major,
                    minor: 0,
                    patch: 0,
                    prerelease: [],
                    build: parseBuild(version.build, build),
                };
                break;
            }
        case "minor":
            // If this is a pre-minor version, bump up to the same minor version.
            // Otherwise increment minor.
            // 1.2.0-5 bumps to 1.2.0
            // 1.2.1 bumps to 1.3.0
            if (version.patch !== 0 ||
                version.prerelease.length === 0) {
                result = {
                    major: version.major,
                    minor: version.minor + 1,
                    patch: 0,
                    prerelease: [],
                    build: parseBuild(version.build, build),
                };
                break;
            }
            else {
                result = {
                    major: version.major,
                    minor: version.minor,
                    patch: 0,
                    prerelease: [],
                    build: parseBuild(version.build, build),
                };
                break;
            }
        case "patch":
            // If this is not a pre-release version, it will increment the patch.
            // If it is a pre-release it will bump up to the same patch version.
            // 1.2.0-5 patches to 1.2.0
            // 1.2.0 patches to 1.2.1
            if (version.prerelease.length === 0) {
                result = {
                    major: version.major,
                    minor: version.minor,
                    patch: version.patch + 1,
                    prerelease: [],
                    build: parseBuild(version.build, build),
                };
                break;
            }
            else {
                result = {
                    major: version.major,
                    minor: version.minor,
                    patch: version.patch,
                    prerelease: [],
                    build: parseBuild(version.build, build),
                };
                break;
            }
        // 1.0.0 "pre" would become 1.0.0-0
        // 1.0.0-0 would become 1.0.0-1
        // 1.0.0-beta.0 would be come 1.0.0-beta.1
        // switching the pre identifier resets the number to 0
        case "pre":
            result = {
                major: version.major,
                minor: version.minor,
                patch: version.patch,
                prerelease: pre(version.prerelease, prerelease),
                build: parseBuild(version.build, build),
            };
            break;
        default:
            throw new Error(`invalid increment argument: ${release}`);
    }
    if (isLegacy) {
        return format(result);
    }
    return result;
}
