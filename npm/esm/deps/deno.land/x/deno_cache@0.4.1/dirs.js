// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";
import { join } from "./deps.ts";
export function cacheDir() {
    if (dntShim.Deno.build.os === "darwin") {
        const home = homeDir();
        if (home) {
            return join(home, "Library/Caches");
        }
    }
    else if (dntShim.Deno.build.os === "linux") {
        dntShim.Deno.permissions.request({ name: "env", variable: "XDG_CACHE_HOME" });
        const cacheHome = dntShim.Deno.env.get("XDG_CACHE_HOME");
        if (cacheHome) {
            return cacheHome;
        }
        else {
            const home = homeDir();
            if (home) {
                return join(home, ".cache");
            }
        }
    }
    else {
        dntShim.Deno.permissions.request({ name: "env", variable: "LOCALAPPDATA" });
        return dntShim.Deno.env.get("LOCALAPPDATA");
    }
}
export function homeDir() {
    switch (dntShim.Deno.build.os) {
        case "windows":
            dntShim.Deno.permissions.request({ name: "env", variable: "USERPROFILE" });
            return dntShim.Deno.env.get("USERPROFILE");
        case "linux":
        case "darwin":
            dntShim.Deno.permissions.request({ name: "env", variable: "HOME" });
            return dntShim.Deno.env.get("HOME");
        default:
            throw Error("unreachable");
    }
}
