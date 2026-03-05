"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToRFC3339String = exports.dateFromRFC3339String = exports.DDate = exports.isNode = exports.isBrowser = exports.UnparsedObject = void 0;
class UnparsedObject {
    constructor(data) {
        this._data = data;
    }
}
exports.UnparsedObject = UnparsedObject;
exports.isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
exports.isNode = typeof process !== "undefined" &&
    process.release &&
    process.release.name === "node";
class DDate extends Date {
}
exports.DDate = DDate;
const RFC3339Re = /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})\.?(\d+)?(?:(?:([+-]\d{2}):?(\d{2}))|Z)?$/;
function dateFromRFC3339String(date) {
    const m = RFC3339Re.exec(date);
    if (m) {
        const _date = new DDate(date);
        _date.originalDate = date;
        return _date;
    }
    else {
        throw new Error("unexpected date format: " + date);
    }
}
exports.dateFromRFC3339String = dateFromRFC3339String;
function dateToRFC3339String(date) {
    if (date instanceof DDate && date.originalDate) {
        return date.originalDate;
    }
    return date.toISOString().split(".")[0] + "Z";
}
exports.dateToRFC3339String = dateToRFC3339String;
//# sourceMappingURL=util.js.map