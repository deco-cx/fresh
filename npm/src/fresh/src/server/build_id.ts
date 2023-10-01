import * as dntShim from "../../../_dnt.shims.js";
import { toHashString } from "./deps.js";

const deploymentId = dntShim.Deno.env.get("DENO_DEPLOYMENT_ID") ||
  crypto.randomUUID();
const buildIdHash = await crypto.subtle.digest(
  "SHA-1",
  new TextEncoder().encode(deploymentId),
);

export const BUILD_ID = toHashString(buildIdHash, "hex");
