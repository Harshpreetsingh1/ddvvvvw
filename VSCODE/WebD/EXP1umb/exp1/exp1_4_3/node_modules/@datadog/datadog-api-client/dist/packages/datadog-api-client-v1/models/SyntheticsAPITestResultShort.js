"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITestResultShort = void 0;
/**
 * Object with the results of a single Synthetic API test.
 */
class SyntheticsAPITestResultShort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITestResultShort.attributeTypeMap;
    }
}
exports.SyntheticsAPITestResultShort = SyntheticsAPITestResultShort;
/**
 * @ignore
 */
SyntheticsAPITestResultShort.attributeTypeMap = {
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
        type: "SyntheticsAPITestResultShortResult",
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
//# sourceMappingURL=SyntheticsAPITestResultShort.js.map