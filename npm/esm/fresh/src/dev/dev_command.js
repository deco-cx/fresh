import * as dntShim from "../../../_dnt.shims.js";
import { updateCheck } from "./update_check.js";
import { DAY, dirname, fromFileUrl, join } from "./deps.js";
import { build } from "./build.js";
import { collect, ensureMinDenoVersion, generate } from "./mod.js";
export async function dev(base, entrypoint, options = {}) {
    ensureMinDenoVersion();
    // Run update check in background
    updateCheck(DAY).catch(() => { });
    entrypoint = new URL(entrypoint, base).href;
    const dir = dirname(fromFileUrl(base));
    let currentManifest;
    const prevManifest = dntShim.Deno.env.get("FRSH_DEV_PREVIOUS_MANIFEST");
    if (prevManifest) {
        currentManifest = JSON.parse(prevManifest);
    }
    else {
        currentManifest = { islands: [], routes: [] };
    }
    const newManifest = await collect(dir);
    dntShim.Deno.env.set("FRSH_DEV_PREVIOUS_MANIFEST", JSON.stringify(newManifest));
    const manifestChanged = !arraysEqual(newManifest.routes, currentManifest.routes) ||
        !arraysEqual(newManifest.islands, currentManifest.islands);
    if (manifestChanged)
        await generate(dir, newManifest);
    if (dntShim.Deno.args.includes("build")) {
        await build(join(dir, "fresh.gen.ts"), options);
    }
    else {
        await import(entrypoint);
    }
}
function arraysEqual(a, b) {
    if (a.length !== b.length)
        return false;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i])
            return false;
    }
    return true;
}
