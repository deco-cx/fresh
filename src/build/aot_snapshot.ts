import type { BuildSnapshot } from "./mod.ts";

export class AotSnapshot implements BuildSnapshot {
  #files: Map<string, string>;
  #dependencies: Map<string, string[]>;

  constructor(
    files: Map<string, string>,
    dependencies: Map<string, string[]>,
  ) {
    this.#files = files;
    this.#dependencies = dependencies;
  }

  get paths(): Promise<string[]> {
    return Promise.resolve(Array.from(this.#files.keys()));
  }

  async read(path: string): Promise<ReadableStream<Uint8Array> | null> {
    const filePath = this.#files.get(path);
    if (filePath !== undefined) {
      try {
        const file = await Deno.open(filePath, { read: true });
        return file.readable;
      } catch (_err) {
        return null;
      }
    }

    // Handler will turn this into a 404
    return null;
  }

  dependencies(path: string): Promise<string[]> {
    return Promise.resolve(this.#dependencies.get(path) ?? []);
  }
}
