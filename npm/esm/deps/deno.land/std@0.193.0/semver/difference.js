import { parse } from "./parse.ts";
import { eq } from "./eq.ts";
export function difference(sv0, sv1, options) {
    const s0 = parse(sv0);
    const s1 = parse(sv1);
    const includePrerelease = options?.includePrerelease ?? true;
    if (eq(s0, s1)) {
        return undefined;
    }
    else {
        let prefix = "";
        let defaultResult = undefined;
        if (s0 && s1) {
            if (includePrerelease && (s0.prerelease.length || s1.prerelease.length)) {
                prefix = "pre";
                defaultResult = "prerelease";
            }
            for (const key in s0) {
                if (key === "major" || key === "minor" || key === "patch") {
                    if (s0[key] !== s1[key]) {
                        return (prefix + key);
                    }
                }
            }
        }
        return defaultResult; // may be undefined
    }
}
