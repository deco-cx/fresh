// deno-lint-ignore-file require-await
import { emptyDir, ensureDir, join } from "./deps.ts";

export interface BlobStorage {
  set: (key: string, value: Uint8Array) => Promise<void>;
  get: (
    key: string,
  ) => Promise<
    | { content: Uint8Array; size: number }
    | { content: ReadableStream<Uint8Array>; size: number }
    | undefined
  >;
  clear: () => Promise<void>;
}

export const inMemoryStorage = (): BlobStorage => {
  const map = new Map<string, Uint8Array>();

  return {
    clear: async () => map.clear(),
    get: async (k: string) => {
      const file = map.get(k);

      return file && { content: file, size: file.length };
    },
    set: async (k: string, v: Uint8Array) => {
      map.set(k, v);
    },
  };
};

export const fsStorage = async (rootDir: string): Promise<BlobStorage> => {
  await ensureDir(rootDir);

  return {
    clear: () => emptyDir(rootDir),
    get: async (k: string) => {
      try {
        const path = join(rootDir, k);
        const [stat, file] = await Promise.all([
          Deno.lstat(path),
          Deno.open(path, { read: true }),
        ]);

        return { content: file.readable, size: stat.size };
      } catch {
        return undefined;
      }
    },
    set: (k: string, v: Uint8Array) =>
      Deno.writeFile(join(rootDir, k), v, { create: true, append: false }),
  };
};
