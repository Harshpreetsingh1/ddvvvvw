"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestResultShort = void 0;
/**
 * Object with the results of a single Synthetic browser test.
 */
class SyntheticsBrowserTestResultShort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestResultShort.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestResultShort = SyntheticsBrowserTestResultShort;
/**
 * @ignore
 */
SyntheticsBrowserTestResultShort.attributeTypeMap = {
    checkTime: {
        baseName: "check_time",
        type: "number",
        format: "double",
    },
    probeDc: {
        baseName: "probe_dc",
        type: "string",
    },
    result: {
        baseName: "result",
        type: "SyntheticsBrowserTestResultShortResult",
    },
    resultId: {
        baseName: "result_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "SyntheticsTestMonitorStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTestResultShort.js.map