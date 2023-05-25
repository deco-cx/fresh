import { BUILD_ID } from "./constants.ts";

export interface CacheStorage {
  get: (
    key: string,
  ) => Promise<Uint8Array | ReadableStream<Uint8Array> | null>;
  set: (key: string, payload: Uint8Array) => Promise<void>;
}

export const createAssetsStorage = () =>
  typeof caches !== "undefined"
    ? webCacheAPIStorage()
    : typeof Deno.openKv !== "undefined"
    ? kvStorage()
    : inMemoryStorage();

const webCacheAPIStorage = async (): Promise<CacheStorage> => {
  console.log("Creating WebCache API storage");

  const cache = await caches.open(`_frsh/js/${BUILD_ID}`);

  const requestForKey = (key: string) =>
    new Request(new URL(key, "http://fresh.deno.cache"));

  return {
    get: async (key) => {
      const match = await cache.match(requestForKey(key));

      return match?.body ?? null;
    },
    set: (key, payload) => cache.put(requestForKey(key), new Response(payload)),
  };
};

// key                                                    | value
// ["_frsh", "js", "headers", BUILD_ID, chunkName]        | { key: value, ... } // headers data
// ["_frsh", "js", "buildOutput", BUILD_ID, chunkName, i] | ArrayBuffer {} // split content
const kvStorage = async (): Promise<CacheStorage> => {
  console.log("Creating KV storage");

  const MAX_CHUNK_SIZE = 65536;
  const NAMESPACE = ["_frsh", "js"];
  const cache = await Deno.openKv();

  const payloadKey = (key: string) => [...NAMESPACE, BUILD_ID, key];
  const chunkKey = (
    key: string,
    index: number,
  ) => [...payloadKey(key), `${index}`];

  return {
    get: (key) => {
      const list = cache.list({ prefix: payloadKey(key) }, {
        consistency: "eventual",
      });

      return Promise.resolve(
        new ReadableStream<Uint8Array>({
          start: async (controller) => {
            for await (const chunk of list) {
              controller.enqueue(chunk.value as Uint8Array);
            }
            controller.close();
          },
        }),
      );
    },
    set: async (key, payload) => {
      const chunks: Uint8Array[] = [];

      // Split payload into multiple chunks so they all fit inside KV
      for (let i = 0; i * MAX_CHUNK_SIZE < payload.length; i++) {
        const chunk = payload.slice(
          i * MAX_CHUNK_SIZE,
          (i + 1) * MAX_CHUNK_SIZE,
        );

        chunks.push(chunk);
      }

      const transaction = chunks.reduce(
        (operation, chunk, i) => operation.set(chunkKey(key, i), chunk),
        cache.atomic(),
      );

      await transaction.commit();
    },
  };
};

const inMemoryStorage = (): Promise<CacheStorage> => {
  console.log("Creating InMemory storage");

  const cache = new Map<string, Uint8Array>();

  return Promise.resolve({
    get: (key) => Promise.resolve(cache.get(key) ?? null),
    set: (key, payload) => new Promise(() => cache.set(key, payload)),
  });
};
