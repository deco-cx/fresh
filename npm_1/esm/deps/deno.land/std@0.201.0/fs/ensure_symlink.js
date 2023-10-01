// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
import { dirname } from "../path/dirname.js";
import { resolve } from "../path/resolve.js";
import { ensureDir, ensureDirSync } from "./ensure_dir.js";
import { getFileInfoType, toPathString } from "./_util.js";
const isWindows = Deno.build.os === "windows";
function resolveSymlinkTarget(target, linkName) {
    if (typeof target !== "string")
        return target; // URL is always absolute path
    if (typeof linkName === "string") {
        return resolve(dirname(linkName), target);
    }
    else {
        return new URL(target, linkName);
    }
}
/**
 * Ensures that the link exists, and points to a valid file.
 * If the directory structure does not exist, it is created.
 *
 * @param target the source file path
 * @param linkName the destination link path
 */
export async function ensureSymlink(target, linkName) {
    const targetRealPath = resolveSymlinkTarget(target, linkName);
    const srcStatInfo = await Deno.lstat(targetRealPath);
    const srcFilePathType = getFileInfoType(srcStatInfo);
    await ensureDir(dirname(toPathString(linkName)));
    const options = isWindows
        ? {
            type: srcFilePathType === "dir" ? "dir" : "file",
        }
        : undefined;
    try {
        await Deno.symlink(target, linkName, options);
    }
    catch (error) {
        if (!(error instanceof Deno.errors.AlreadyExists)) {
            throw error;
        }
    }
}
/**
 * Ensures that the link exists, and points to a valid file.
 * If the directory structure does not exist, it is created.
 *
 * @param target the source file path
 * @param linkName the destination link path
 */
export function ensureSymlinkSync(target, linkName) {
    const targetRealPath = resolveSymlinkTarget(target, linkName);
    const srcStatInfo = Deno.lstatSync(targetRealPath);
    const srcFilePathType = getFileInfoType(srcStatInfo);
    ensureDirSync(dirname(toPathString(linkName)));
    const options = isWindows
        ? {
            type: srcFilePathType === "dir" ? "dir" : "file",
        }
        : undefined;
    try {
        Deno.symlinkSync(target, linkName, options);
    }
    catch (error) {
        if (!(error instanceof Deno.errors.AlreadyExists)) {
            throw error;
        }
    }
}
