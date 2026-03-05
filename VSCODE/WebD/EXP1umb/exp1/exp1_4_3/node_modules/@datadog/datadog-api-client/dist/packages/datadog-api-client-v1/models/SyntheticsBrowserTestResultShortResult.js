"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestResultShortResult = void 0;
/**
 * Object with the result of the last browser test run.
 */
class SyntheticsBrowserTestResultShortResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestResultShortResult.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestResultShortResult = SyntheticsBrowserTestResultShortResult;
/**
 * @ignore
 */
SyntheticsBrowserTestResultShortResult.attributeTypeMap = {
    device: {
        baseName: "device",
        type: "SyntheticsDevice",
    },
    duration: {
        baseName: "duration",
        type: "number",
        format: "double",
    },
    errorCount: {
        baseName: "errorCount",
        type: "number",
        format: "int64",
    },
    stepCountCompleted: {
        baseName: "stepCountCompleted",
        type: "number",
        format: "int64",
    },
    stepCountTotal: {
        baseName: "stepCountTotal",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTestResultShortResult.js.map