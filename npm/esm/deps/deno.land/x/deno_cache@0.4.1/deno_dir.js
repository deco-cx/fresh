// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";
import { isAbsolute, join, normalize } from "./deps.ts";
import { DiskCache } from "./disk_cache.ts";
import { cacheDir, homeDir } from "./dirs.ts";
import { HttpCache } from "./http_cache.ts";
import { assert } from "./util.ts";
export class DenoDir {
    constructor(root, readOnly) {
        Object.defineProperty(this, "deps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "gen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (root) {
            if (root instanceof URL) {
                root = root.toString();
            }
            if (!isAbsolute(root)) {
                root = normalize(join(dntShim.Deno.cwd(), root));
            }
        }
        else {
            dntShim.Deno.permissions.request({ name: "env", variable: "DENO_DIR" });
            const dd = dntShim.Deno.env.get("DENO_DIR");
            if (dd) {
                if (!isAbsolute(dd)) {
                    root = normalize(join(dntShim.Deno.cwd(), dd));
                }
                else {
                    root = dd;
                }
            }
            else {
                const cd = cacheDir();
                if (cd) {
                    root = join(cd, "deno");
                }
                else {
                    const hd = homeDir();
                    if (hd) {
                        root = join(hd, ".deno");
                    }
                }
            }
        }
        assert(root, "Could not set the Deno root directory");
        assert(isAbsolute(root), `The root directory "${root}" is not absolute.`);
        dntShim.Deno.permissions.request({ name: "read" });
        this.root = root;
        this.deps = new HttpCache(join(root, "deps"), readOnly);
        this.gen = new DiskCache(join(root, "gen"));
    }
}
