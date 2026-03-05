"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestResultFull = void 0;
/**
 * Object returned describing a browser test result.
 */
class SyntheticsBrowserTestResultFull {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestResultFull.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestResultFull = SyntheticsBrowserTestResultFull;
/**
 * @ignore
 */
SyntheticsBrowserTestResultFull.attributeTypeMap = {
    check: {
        baseName: "check",
        type: "SyntheticsBrowserTestResultFullCheck",
    },
    checkTime: {
        baseName: "check_time",
        type: "number",
        format: "double",
    },
    checkVersion: {
        baseName: "check_version",
        type: "number",
        format: "int64",
    },
    probeDc: {
        baseName: "probe_dc",
        type: "string",
    },
    result: {
        baseName: "result",
        type: "SyntheticsBrowserTestResultData",
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
//# sourceMappingURL=SyntheticsBrowserTestResultFull.js.map