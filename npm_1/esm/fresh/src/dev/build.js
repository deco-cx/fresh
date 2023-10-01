import { ServerContext } from "../server/context.js";
import { dirname, fromFileUrl, join, toFileUrl } from "../server/deps.js";
import { fs } from "./deps.js";
export async function build(manifestPath, opts) {
    const manifest = (await import(toFileUrl(manifestPath).href))
        .default;
    const outDir = join(dirname(fromFileUrl(manifest.baseUrl)), "_fresh");
    // Ensure that build dir is empty
    await fs.emptyDir(outDir);
    const ctx = await ServerContext.fromManifest(manifest, {
        ...opts,
        skipSnapshot: true,
    });
    // Bundle assets
    const snapshot = await ctx.buildSnapshot();
    // Write output files to disk
    await Promise.all(snapshot.paths.map((fileName) => {
        const data = snapshot.read(fileName);
        if (data === null)
            return;
        return Deno.writeFile(join(outDir, fileName), data);
    }));
    // Write dependency snapshot file to disk
    const deps = {};
    for (const filePath of snapshot.paths) {
        const dependencies = snapshot.dependencies(filePath);
        deps[filePath] = dependencies;
    }
    const snapshotPath = join(outDir, "snapshot.json");
    await Deno.writeTextFile(snapshotPath, JSON.stringify(deps, null, 2));
}
