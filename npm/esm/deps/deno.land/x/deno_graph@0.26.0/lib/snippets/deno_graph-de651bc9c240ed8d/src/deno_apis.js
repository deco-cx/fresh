// Copyright 2018-2022 the Deno authors. All rights reserved. MIT license.
// deno-lint-ignore-file
import * as dntShim from "../../../../../../../../_dnt.shims.ts";
export function get_no_color() {
    return "Deno" in dntShim.dntGlobalThis ? Boolean(dntShim.Deno.noColor) : true;
}
