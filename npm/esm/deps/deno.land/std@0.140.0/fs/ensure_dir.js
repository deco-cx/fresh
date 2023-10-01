// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
import * as dntShim from "../../../../_dnt.shims.ts";
import { getFileInfoType } from "./_util.ts";
/**
 * Ensures that the directory exists.
 * If the directory structure does not exist, it is created. Like mkdir -p.
 * Requires the `--allow-read` and `--allow-write` flag.
 */
export async function ensureDir(dir) {
    try {
        const fileInfo = await dntShim.Deno.lstat(dir);
        if (!fileInfo.isDirectory) {
            throw new Error(`Ensure path exists, expected 'dir', got '${getFileInfoType(fileInfo)}'`);
        }
    }
    catch (err) {
        if (err instanceof dntShim.Deno.errors.NotFound) {
            // if dir not exists. then create it.
            await dntShim.Deno.mkdir(dir, { recursive: true });
            return;
        }
        throw err;
    }
}
/**
 * Ensures that the directory exists.
 * If the directory structure does not exist, it is created. Like mkdir -p.
 * Requires the `--allow-read` and `--allow-write` flag.
 */
export function ensureDirSync(dir) {
    try {
        const fileInfo = dntShim.Deno.lstatSync(dir);
        if (!fileInfo.isDirectory) {
            throw new Error(`Ensure path exists, expected 'dir', got '${getFileInfoType(fileInfo)}'`);
        }
    }
    catch (err) {
        if (err instanceof dntShim.Deno.errors.NotFound) {
            // if dir not exists. then create it.
            dntShim.Deno.mkdirSync(dir, { recursive: true });
            return;
        }
        throw err;
    }
}
