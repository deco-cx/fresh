import * as dntShim from "../../../_dnt.shims.js";
import { INTERNAL_PREFIX } from "../runtime/utils.js";
import { BUILD_ID } from "./build_id.js";
export const REFRESH_JS_URL = `${INTERNAL_PREFIX}/refresh.js`;
export const ALIVE_URL = `${INTERNAL_PREFIX}/alive`;
export const JS_PREFIX = `/js`;
export const DEBUG = !dntShim.Deno.env.get("DENO_DEPLOYMENT_ID");
export function bundleAssetUrl(path) {
    return `${INTERNAL_PREFIX}${JS_PREFIX}/${BUILD_ID}${path}`;
}
