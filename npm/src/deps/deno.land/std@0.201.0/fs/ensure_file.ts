// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";

import { dirname } from "../path/dirname.ts";
import { ensureDir, ensureDirSync } from "./ensure_dir.ts";
import { getFileInfoType, toPathString } from "./_util.ts";

/**
 * Ensures that the file exists.
 * If the file that is requested to be created is in directories that do not
 * exist.
 * these directories are created. If the file already exists,
 * it is NOTMODIFIED.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { ensureFile } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * ensureFile("./folder/targetFile.dat"); // returns promise
 * ```
 */
export async function ensureFile(filePath: string | URL) {
  try {
    // if file exists
    const stat = await dntShim.Deno.lstat(filePath);
    if (!stat.isFile) {
      throw new Error(
        `Ensure path exists, expected 'file', got '${getFileInfoType(stat)}'`,
      );
    }
  } catch (err) {
    // if file not exists
    if (err instanceof dntShim.Deno.errors.NotFound) {
      // ensure dir exists
      await ensureDir(dirname(toPathString(filePath)));
      // create file
      await dntShim.Deno.writeFile(filePath, new Uint8Array());
      return;
    }

    throw err;
  }
}

/**
 * Ensures that the file exists.
 * If the file that is requested to be created is in directories that do not
 * exist,
 * these directories are created. If the file already exists,
 * it is NOT MODIFIED.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { ensureFileSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * ensureFileSync("./folder/targetFile.dat"); // void
 * ```
 */
export function ensureFileSync(filePath: string | URL) {
  try {
    // if file exists
    const stat = dntShim.Deno.lstatSync(filePath);
    if (!stat.isFile) {
      throw new Error(
        `Ensure path exists, expected 'file', got '${getFileInfoType(stat)}'`,
      );
    }
  } catch (err) {
    // if file not exists
    if (err instanceof dntShim.Deno.errors.NotFound) {
      // ensure dir exists
      ensureDirSync(dirname(toPathString(filePath)));
      // create file
      dntShim.Deno.writeFileSync(filePath, new Uint8Array());
      return;
    }
    throw err;
  }
}
