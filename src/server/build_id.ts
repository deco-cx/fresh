import { toHashString } from "./deps.ts";

const buildIdHash = crypto.randomUUID();

export const BUILD_ID = toHashString(buildIdHash, "hex");
