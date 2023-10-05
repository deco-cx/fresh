import { getServerContext } from "../server/context.ts";
import { join } from "../server/deps.ts";
import { colors, fs } from "./deps.ts";
import { BuildSnapshot, BuildSnapshotJson } from "../build/mod.ts";
import { BUILD_ID } from "../server/build_id.ts";
import { InternalFreshOptions } from "../server/types.ts";

export const toSnapshotJSON = async (snapshot: BuildSnapshot) => {
  // Write dependency snapshot file to disk
  const jsonSnapshot: BuildSnapshotJson = {
    build_id: BUILD_ID,
    files: {},
  };

  for (const filePath of await snapshot.paths) {
    const dependencies = await snapshot.dependencies(filePath);
    jsonSnapshot.files[filePath] = dependencies;
  }

  return jsonSnapshot;
};

export async function build(
  config: InternalFreshOptions,
) {
  throw new Error(
    "AOT Builds not supported in this version. Use the usual way to deploy freshg",
  );

  // Ensure that build dir is empty
  await fs.emptyDir(config.build.outDir);

  await Promise.all(config.plugins.map((plugin) => plugin.buildStart?.()));

  // Bundle assets
  const ctx = await getServerContext(config);
  const snapshot = await ctx.buildSnapshot();

  // Write output files to disk
  for (const fileName of await snapshot.paths) {
    const data = await snapshot.read(fileName);
    if (data === null) return;

    return Deno.writeFile(join(config.build.outDir, fileName), data);
  }

  const jsonSnapshot = toSnapshotJSON(snapshot);
  const snapshotPath = join(config.build.outDir, "snapshot.json");
  await Deno.writeTextFile(snapshotPath, JSON.stringify(jsonSnapshot, null, 2));

  console.log(
    `Assets written to: ${colors.green(config.build.outDir)}`,
  );

  await Promise.all(config.plugins.map((plugin) => plugin.buildEnd?.()));
}
