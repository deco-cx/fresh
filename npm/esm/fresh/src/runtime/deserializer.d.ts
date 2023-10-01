export declare const KEY = "_f";
interface Signal<T> {
    peek(): T;
    value: T;
}
export declare function deserialize(str: string, signal?: <T>(a: T) => Signal<T>): unknown;
export {};
