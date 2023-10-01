// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.
import * as dntShim from "../../../../_dnt.shims.ts";


export type OSType = "windows" | "linux" | "darwin" | "freebsd";

export const osType: OSType = (() => {
  // deno-lint-ignore no-explicit-any
  const { Deno } = dntShim.dntGlobalThis as any;
  if (typeof Deno?.build?.os === "string") {
    return Deno.build.os;
  }

  // deno-lint-ignore no-explicit-any
  const { navigator } = dntShim.dntGlobalThis as any;
  if (navigator?.appVersion?.includes?.("Win")) {
    return "windows";
  }

  return "linux";
})();

export const isWindows = osType === "windows";
export const isLinux = osType === "linux";
