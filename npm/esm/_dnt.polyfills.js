if (!Array.prototype.findLastIndex) {
    Array.prototype.findLastIndex = function (callbackfn, that) {
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
    Array.prototype.findLast = function (callbackfn, that) {
        const index = this.findLastIndex(callbackfn, that);
        return index === -1 ? undefined : this[index];
    };
}
// https://github.com/tc39/proposal-accessible-object-hasownproperty/blob/main/polyfill.js
if (!Object.hasOwn) {
    Object.defineProperty(Object, "hasOwn", {
        value: function (object, property) {
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
export {};
