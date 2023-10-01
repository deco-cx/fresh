declare global {
  interface Error {
    cause?: unknown;
  }
}

export {};
declare global {
  interface ImportMeta {
    /** A flag that indicates if the current module is the main module that was
     * called when starting the program under Deno.
     *
     * ```ts
     * if (import.meta.main) {
     *   // this was loaded as the main module, maybe do some bootstrapping
     * }
     * ```
     */
    main: boolean;

    /** A function that returns resolved specifier as if it would be imported
     * using `import(specifier)`.
     *
     * ```ts
     * console.log(import.meta.resolve("./foo.js"));
     * // file:///dev/foo.js
     * ```
     */
    // @ts-ignore override
    resolve(specifier: string): string;
  }
}

export {}
// https://github.com/denoland/deno/blob/7fc5bfe51b7d405aaa5293ec6f1a8f1e9119aea2/cli/dts/lib.esnext.array.d.ts
declare global {
  interface Array<T> {
    /**
     * Returns the value of the last element in the array where predicate is true, and undefined
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    findLast<S extends T>(
      predicate: (this: void, value: T, index: number, obj: T[]) => value is S,
      thisArg?: any,
    ): S | undefined;
    findLast(
      predicate: (value: T, index: number, obj: T[]) => unknown,
      thisArg?: any,
    ): T | undefined;

    /**
     * Returns the index of the last element in the array where predicate is true, and -1
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    findLastIndex(
      predicate: (value: T, index: number, obj: T[]) => unknown,
      thisArg?: any,
    ): number;
  }
}

if (!Array.prototype.findLastIndex) {
  Array.prototype.findLastIndex = function (callbackfn: any, that: any) {
    const boundFunc = that === undefined ? callbackfn : callbackfn.bind(that);
    let index = this.length - 1;
    while (index >= 0) {
      const result = boundFunc(this[index], index, this);
      if (result) {
        return index;
      }
      index--;
    }
    return -1;
  };
}

if (!Array.prototype.findLast) {
  Array.prototype.findLast = function (callbackfn: any, that: any) {
    const index = this.findLastIndex(callbackfn, that);
    return index === -1 ? undefined : this[index];
  };
}

export {};
// https://github.com/tc39/proposal-accessible-object-hasownproperty/blob/main/polyfill.js
if (!Object.hasOwn) {
  Object.defineProperty(Object, "hasOwn", {
    value: function (object: any, property: any) {
      if (object == null) {
        throw new TypeError("Cannot convert undefined or null to object");
      }
      return Object.prototype.hasOwnProperty.call(Object(object), property);
    },
    configurable: true,
    enumerable: false,
    writable: true,
  });
}

declare global {
  interface Object {
    /**
     * Determines whether an object has a property with the specified name.
     * @param o An object.
     * @param v A property name.
     */
    hasOwn(o: object, v: PropertyKey): boolean;
  }
}

export {};
