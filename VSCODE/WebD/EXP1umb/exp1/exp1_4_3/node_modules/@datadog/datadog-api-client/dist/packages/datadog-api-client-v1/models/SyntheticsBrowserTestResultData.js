"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBrowserTestResultData = void 0;
/**
 * Object containing results for your Synthetic browser test.
 */
class SyntheticsBrowserTestResultData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBrowserTestResultData.attributeTypeMap;
    }
}
exports.SyntheticsBrowserTestResultData = SyntheticsBrowserTestResultData;
/**
 * @ignore
 */
SyntheticsBrowserTestResultData.attributeTypeMap = {
    browserType: {
        baseName: "browserType",
        type: "string",
    },
    browserVersion: {
        baseName: "browserVersion",
        type: "string",
    },
    device: {
        baseName: "device",
        type: "SyntheticsDevice",
    },
    duration: {
        baseName: "duration",
        type: "number",
        format: "double",
    },
    error: {
        baseName: "error",
        type: "string",
    },
    failure: {
        baseName: "failure",
        type: "SyntheticsBrowserTestResultFailure",
    },
    passed: {
        baseName: "passed",
        type: "boolean",
    },
    receivedEmailCount: {
        baseName: "receivedEmailCount",
        type: "number",
        format: "int64",
    },
    startUrl: {
        baseName: "startUrl",
        type: "string",
    },
    stepDetails: {
        baseName: "stepDetails",
        type: "Array<SyntheticsStepDetail>",
    },
    thumbnailsBucketKey: {
        baseName: "thumbnailsBucketKey",
        type: "boolean",
    },
    timeToInteractive: {
        baseName: "timeToInteractive",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBrowserTestResultData.js.map