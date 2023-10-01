// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";

// @ts-nocheck Bypass static errors for missing --unstable.

import * as path from "../path/mod.ts";
import { ensureDir, ensureDirSync } from "./ensure_dir.ts";
import { getFileInfoType, isSubdir, toPathString } from "./_util.ts";
import { assert } from "../assert/assert.ts";
import { isWindows } from "../_util/os.ts";

export interface CopyOptions {
  /**
   * overwrite existing file or directory.
   * @default {false}
   */
  overwrite?: boolean;
  /**
   * When `true`, will set last modification and access times to the ones of the
   * original source files.
   * When `false`, timestamp behavior is OS-dependent.
   *
   * @default {false}
   */
  preserveTimestamps?: boolean;
}

interface InternalCopyOptions extends CopyOptions {
  /** @default {false} */
  isFolder?: boolean;
}

async function ensureValidCopy(
  src: string | URL,
  dest: string | URL,
  options: InternalCopyOptions,
): Promise<dntShim.Deno.FileInfo | undefined> {
  let destStat: dntShim.Deno.FileInfo;

  try {
    destStat = await dntShim.Deno.lstat(dest);
  } catch (err) {
    if (err instanceof dntShim.Deno.errors.NotFound) {
      return;
    }
    throw err;
  }

  if (options.isFolder && !destStat.isDirectory) {
    throw new Error(
      `Cannot overwrite non-directory '${dest}' with directory '${src}'.`,
    );
  }
  if (!options.overwrite) {
    throw new dntShim.Deno.errors.AlreadyExists(`'${dest}' already exists.`);
  }

  return destStat;
}

function ensureValidCopySync(
  src: string | URL,
  dest: string | URL,
  options: InternalCopyOptions,
): dntShim.Deno.FileInfo | undefined {
  let destStat: dntShim.Deno.FileInfo;
  try {
    destStat = dntShim.Deno.lstatSync(dest);
  } catch (err) {
    if (err instanceof dntShim.Deno.errors.NotFound) {
      return;
    }
    throw err;
  }

  if (options.isFolder && !destStat.isDirectory) {
    throw new Error(
      `Cannot overwrite non-directory '${dest}' with directory '${src}'.`,
    );
  }
  if (!options.overwrite) {
    throw new dntShim.Deno.errors.AlreadyExists(`'${dest}' already exists.`);
  }

  return destStat;
}

/* copy file to dest */
async function copyFile(
  src: string | URL,
  dest: string | URL,
  options: InternalCopyOptions,
) {
  await ensureValidCopy(src, dest, options);
  await dntShim.Deno.copyFile(src, dest);
  if (options.preserveTimestamps) {
    const statInfo = await dntShim.Deno.stat(src);
    assert(statInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert(statInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    await dntShim.Deno.utime(dest, statInfo.atime, statInfo.mtime);
  }
}
/* copy file to dest synchronously */
function copyFileSync(
  src: string | URL,
  dest: string | URL,
  options: InternalCopyOptions,
) {
  ensureValidCopySync(src, dest, options);
  dntShim.Deno.copyFileSync(src, dest);
  if (options.preserveTimestamps) {
    const statInfo = dntShim.Deno.statSync(src);
    assert(statInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert(statInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    dntShim.Deno.utimeSync(dest, statInfo.atime, statInfo.mtime);
  }
}

/* copy symlink to dest */
async function copySymLink(
  src: string | URL,
  dest: string | URL,
  options: InternalCopyOptions,
) {
  await ensureValidCopy(src, dest, options);
  const originSrcFilePath = await dntShim.Deno.readLink(src);
  const type = getFileInfoType(await dntShim.Deno.lstat(src));
  if (isWindows) {
    await dntShim.Deno.symlink(originSrcFilePath, dest, {
      type: type === "dir" ? "dir" : "file",
    });
  } else {
    await dntShim.Deno.symlink(originSrcFilePath, dest);
  }
  if (options.preserveTimestamps) {
    const statInfo = await dntShim.Deno.lstat(src);
    assert(statInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert(statInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    await dntShim.Deno.utime(dest, statInfo.atime, statInfo.mtime);
  }
}

/* copy symlink to dest synchronously */
function copySymlinkSync(
  src: string | URL,
  dest: string | URL,
  options: InternalCopyOptions,
) {
  ensureValidCopySync(src, dest, options);
  const originSrcFilePath = dntShim.Deno.readLinkSync(src);
  const type = getFileInfoType(dntShim.Deno.lstatSync(src));
  if (isWindows) {
    dntShim.Deno.symlinkSync(originSrcFilePath, dest, {
      type: type === "dir" ? "dir" : "file",
    });
  } else {
    dntShim.Deno.symlinkSync(originSrcFilePath, dest);
  }

  if (options.preserveTimestamps) {
    const statInfo = dntShim.Deno.lstatSync(src);
    assert(statInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert(statInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    dntShim.Deno.utimeSync(dest, statInfo.atime, statInfo.mtime);
  }
}

/* copy folder from src to dest. */
async function copyDir(
  src: string | URL,
  dest: string | URL,
  options: CopyOptions,
) {
  const destStat = await ensureValidCopy(src, dest, {
    ...options,
    isFolder: true,
  });

  if (!destStat) {
    await ensureDir(dest);
  }

  if (options.preserveTimestamps) {
    const srcStatInfo = await dntShim.Deno.stat(src);
    assert(srcStatInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert(srcStatInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    await dntShim.Deno.utime(dest, srcStatInfo.atime, srcStatInfo.mtime);
  }

  src = toPathString(src);
  dest = toPathString(dest);

  for await (const entry of dntShim.Deno.readDir(src)) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, path.basename(srcPath as string));
    if (entry.isSymlink) {
      await copySymLink(srcPath, destPath, options);
    } else if (entry.isDirectory) {
      await copyDir(srcPath, destPath, options);
    } else if (entry.isFile) {
      await copyFile(srcPath, destPath, options);
    }
  }
}

/* copy folder from src to dest synchronously */
function copyDirSync(
  src: string | URL,
  dest: string | URL,
  options: CopyOptions,
) {
  const destStat = ensureValidCopySync(src, dest, {
    ...options,
    isFolder: true,
  });

  if (!destStat) {
    ensureDirSync(dest);
  }

  if (options.preserveTimestamps) {
    const srcStatInfo = dntShim.Deno.statSync(src);
    assert(srcStatInfo.atime instanceof Date, `statInfo.atime is unavailable`);
    assert(srcStatInfo.mtime instanceof Date, `statInfo.mtime is unavailable`);
    dntShim.Deno.utimeSync(dest, srcStatInfo.atime, srcStatInfo.mtime);
  }

  src = toPathString(src);
  dest = toPathString(dest);

  for (const entry of dntShim.Deno.readDirSync(src)) {
    assert(entry.name != null, "file.name must be set");
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, path.basename(srcPath as string));
    if (entry.isSymlink) {
      copySymlinkSync(srcPath, destPath, options);
    } else if (entry.isDirectory) {
      copyDirSync(srcPath, destPath, options);
    } else if (entry.isFile) {
      copyFileSync(srcPath, destPath, options);
    }
  }
}

/**
 * Copy a file or directory. The directory can have contents. Like `cp -r`.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { copy } from "https://deno.land/std@$STD_VERSION/fs/copy.ts";
 * copy("./foo", "./bar"); // returns a promise
 * ```
 *
 * @param src the file/directory path.
 *            Note that if `src` is a directory it will copy everything inside
 *            of this directory, not the entire directory itself
 * @param dest the destination path. Note that if `src` is a file, `dest` cannot
 *             be a directory
 * @param options
 */
export async function copy(
  src: string | URL,
  dest: string | URL,
  options: CopyOptions = {},
) {
  src = path.resolve(toPathString(src));
  dest = path.resolve(toPathString(dest));

  if (src === dest) {
    throw new Error("Source and destination cannot be the same.");
  }

  const srcStat = await dntShim.Deno.lstat(src);

  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(
      `Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`,
    );
  }

  if (srcStat.isSymlink) {
    await copySymLink(src, dest, options);
  } else if (srcStat.isDirectory) {
    await copyDir(src, dest, options);
  } else if (srcStat.isFile) {
    await copyFile(src, dest, options);
  }
}

/**
 * Copy a file or directory. The directory can have contents. Like `cp -r`.
 * Requires the `--allow-read` and `--allow-write` flag.
 *
 * @example
 * ```ts
 * import { copySync } from "https://deno.land/std@$STD_VERSION/fs/copy.ts";
 * copySync("./foo", "./bar"); // void
 * ```
 * @param src the file/directory path.
 *            Note that if `src` is a directory it will copy everything inside
 *            of this directory, not the entire directory itself
 * @param dest the destination path. Note that if `src` is a file, `dest` cannot
 *             be a directory
 * @param options
 */
export function copySync(
  src: string | URL,
  dest: string | URL,
  options: CopyOptions = {},
) {
  src = path.resolve(toPathString(src));
  dest = path.resolve(toPathString(dest));

  if (src === dest) {
    throw new Error("Source and destination cannot be the same.");
  }

  const srcStat = dntShim.Deno.lstatSync(src);

  if (srcStat.isDirectory && isSubdir(src, dest)) {
    throw new Error(
      `Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`,
    );
  }

  if (srcStat.isSymlink) {
    copySymlinkSync(src, dest, options);
  } else if (srcStat.isDirectory) {
    copyDirSync(src, dest, options);
  } else if (srcStat.isFile) {
    copyFileSync(src, dest, options);
  }
}
