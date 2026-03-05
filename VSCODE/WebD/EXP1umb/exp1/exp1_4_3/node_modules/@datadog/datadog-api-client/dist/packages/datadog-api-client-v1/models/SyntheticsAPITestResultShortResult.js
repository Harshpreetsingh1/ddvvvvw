"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITestResultShortResult = void 0;
/**
 * Result of the last API test run.
 */
class SyntheticsAPITestResultShortResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITestResultShortResult.attributeTypeMap;
    }
}
exports.SyntheticsAPITestResultShortResult = SyntheticsAPITestResultShortResult;
/**
 * @ignore
 */
SyntheticsAPITestResultShortResult.attributeTypeMap = {
    passed: {
        baseName: "passed",
        type: "boolean",
    },
    timings: {
        baseName: "timings",
        type: "SyntheticsTiming",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAPITestResultShortResult.js.map