import { toSnapshotJSON } from "../dev/build.ts";
import { getFile, housekeep, isSupported, saveFile } from "./kvfs.ts";
import { BuildSnapshot, BuildSnapshotJson } from "./mod.ts";

const IS_CHUNK = /\/chunk-[a-zA-Z0-9]*.js/;
const DEPENDENCIES_SNAP = "snapshot.json";

export const getSnapJSON = async (): Promise<BuildSnapshotJson | null> => {
  const deps = await getFile(DEPENDENCIES_SNAP);

  if (!deps) {
    return null;
  }

  return new Response(deps).json();
};

export const saveSnapJSON = (json: BuildSnapshotJson) =>
  saveFile(
    DEPENDENCIES_SNAP,
    new TextEncoder().encode(
      JSON.stringify(json),
    ),
  );

export const saveSnapshot = async (
  snapshot: BuildSnapshot,
) => {
  if (!isSupported()) return;

  const paths = await snapshot.paths;

  // We need to save chunks first, islands/plugins last so we address esm.sh build instabilities
  const chunksFirst = paths.sort((a, b) => {
    const aIsChunk = IS_CHUNK.test(a);
    const bIsChunk = IS_CHUNK.test(b);
    const cmp = a > b ? 1 : a < b ? -1 : 0;
    return aIsChunk && bIsChunk ? cmp : aIsChunk ? -10 : bIsChunk ? 10 : cmp;
  });

  let start = performance.now();
  for (const path of chunksFirst) {
    const content = await snapshot.read(path);

    if (content instanceof ReadableStream) {
      console.info("streams are not yet supported on KVFS");
      return;
    }

    if (content) await saveFile(path, content);
  }

  await saveSnapJSON(await toSnapshotJSON(snapshot));

  let dur = (performance.now() - start) / 1e3;
  console.log(` 💾 Save bundle to Deno.KV: ${dur.toFixed(2)}s`);

  start = performance.now();
  await housekeep();
  dur = (performance.now() - start) / 1e3;
  console.log(` 🧹 Housekeep Deno.KV: ${dur.toFixed(2)}s`);
};
