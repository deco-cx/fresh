import { BUILD_ID } from "./constants.ts";

export interface CacheStorage {
  get: (
    key: string,
  ) => Promise<Uint8Array | ReadableStream<Uint8Array> | null>;
  set: (key: string, payload: Uint8Array) => Promise<void>;
}

export const createAssetsStorage = () => {
  if (typeof caches !== "undefined") {
    console.log("using WebCache API for assets storage");
    return webCacheAPIStorage();
  }

  console.log("using InMemory for assets torage");
  return inMemoryStorage();
};

const webCacheAPIStorage = async (): Promise<CacheStorage> => {
  const cache = await caches.open(`${BUILD_ID}::assets`);

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

const inMemoryStorage = (): CacheStorage => {
  const cache = new Map<string, Uint8Array>();

  return {
    get: (key) => Promise.resolve(cache.get(key) ?? null),
    set: (key, payload) => new Promise(() => cache.set(key, payload)),
  };
};
