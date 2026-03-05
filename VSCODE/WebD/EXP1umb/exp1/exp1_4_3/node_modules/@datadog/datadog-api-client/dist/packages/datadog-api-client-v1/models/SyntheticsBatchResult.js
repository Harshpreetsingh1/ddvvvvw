"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBatchResult = void 0;
/**
 * Object with the results of a Synthetic batch.
 */
class SyntheticsBatchResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBatchResult.attributeTypeMap;
    }
}
exports.SyntheticsBatchResult = SyntheticsBatchResult;
/**
 * @ignore
 */
SyntheticsBatchResult.attributeTypeMap = {
    device: {
        baseName: "device",
        type: "string",
    },
    duration: {
        baseName: "duration",
        type: "number",
        format: "double",
    },
    executionRule: {
        baseName: "execution_rule",
        type: "SyntheticsTestExecutionRule",
    },
    location: {
        baseName: "location",
        type: "string",
    },
    resultId: {
        baseName: "result_id",
        type: "string",
    },
    retries: {
        baseName: "retries",
        type: "number",
        format: "double",
    },
    status: {
        baseName: "status",
        type: "SyntheticsBatchStatus",
    },
    testName: {
        baseName: "test_name",
        type: "string",
    },
    testPublicId: {
        baseName: "test_public_id",
        type: "string",
    },
    testType: {
        baseName: "test_type",
        type: "SyntheticsTestDetailsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBatchResult.js.map