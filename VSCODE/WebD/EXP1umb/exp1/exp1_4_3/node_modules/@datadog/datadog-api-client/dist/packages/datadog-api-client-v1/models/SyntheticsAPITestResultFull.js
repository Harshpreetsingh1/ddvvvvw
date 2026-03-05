"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITestResultFull = void 0;
/**
 * Object returned describing a API test result.
 */
class SyntheticsAPITestResultFull {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITestResultFull.attributeTypeMap;
    }
}
exports.SyntheticsAPITestResultFull = SyntheticsAPITestResultFull;
/**
 * @ignore
 */
SyntheticsAPITestResultFull.attributeTypeMap = {
    check: {
        baseName: "check",
        type: "SyntheticsAPITestResultFullCheck",
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
        type: "SyntheticsAPITestResultData",
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
//# sourceMappingURL=SyntheticsAPITestResultFull.js.map