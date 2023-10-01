// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";

import { getFileInfoType } from "./_util.ts";

/**
 * Ensures that the directory exists.
 * If the directory structure does not exist, it is created. Like mkdir -p.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { ensureDir } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * ensureDir("./bar"); // returns a promise
 * ```
 */
export async function ensureDir(dir: string | URL) {
  try {
    await dntShim.Deno.mkdir(dir, { recursive: true });
  } catch (err) {
    if (!(err instanceof dntShim.Deno.errors.AlreadyExists)) {
      throw err;
    }

    const fileInfo = await dntShim.Deno.lstat(dir);
    if (!fileInfo.isDirectory) {
      throw new Error(
        `Ensure path exists, expected 'dir', got '${
          getFileInfoType(fileInfo)
        }'`,
      );
    }
  }
}

/**
 * Ensures that the directory exists.
 * If the directory structure does not exist, it is created. Like mkdir -p.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { ensureDirSync } from "https://deno.land/std@$STD_VERSION/fs/mod.ts";
 *
 * ensureDirSync("./ensureDirSync"); // void
 * ```
 */
export function ensureDirSync(dir: string | URL) {
  try {
    dntShim.Deno.mkdirSync(dir, { recursive: true });
  } catch (err) {
    if (!(err instanceof dntShim.Deno.errors.AlreadyExists)) {
      throw err;
    }

    const fileInfo = dntShim.Deno.lstatSync(dir);
    if (!fileInfo.isDirectory) {
      throw new Error(
        `Ensure path exists, expected 'dir', got '${
          getFileInfoType(fileInfo)
        }'`,
      );
    }
  }
}
