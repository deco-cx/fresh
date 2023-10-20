/**
 * This file was intentionally duplicated to remove the dev/deps.ts dependency to avoid including `ts_morph` dep.
 * This is necessary because we do build the islands and save them on KV instead of in memory and those dependencies are used for ahead-of-time build.
 */
import { BuildSnapshot, BuildSnapshotJson } from "../build/mod.ts";
import { BUILD_ID } from "../server/build_id.ts";

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
