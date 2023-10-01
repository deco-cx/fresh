import { toHashString } from "./deps.js";
const buildIdHash = crypto.randomUUID();
export const BUILD_ID = toHashString(buildIdHash, "hex");
