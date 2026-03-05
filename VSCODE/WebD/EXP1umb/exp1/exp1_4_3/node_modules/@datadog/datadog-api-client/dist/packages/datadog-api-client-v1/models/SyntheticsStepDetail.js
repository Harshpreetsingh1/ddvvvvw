"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsStepDetail = void 0;
/**
 * Object describing a step for a Synthetic test.
 */
class SyntheticsStepDetail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsStepDetail.attributeTypeMap;
    }
}
exports.SyntheticsStepDetail = SyntheticsStepDetail;
/**
 * @ignore
 */
SyntheticsStepDetail.attributeTypeMap = {
    allowFailure: {
        baseName: "allowFailure",
        type: "boolean",
    },
    browserErrors: {
        baseName: "browserErrors",
        type: "Array<SyntheticsBrowserError>",
    },
    checkType: {
        baseName: "checkType",
        type: "SyntheticsCheckType",
    },
    description: {
        baseName: "description",
        type: "string",
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
    playingTab: {
        baseName: "playingTab",
        type: "SyntheticsPlayingTab",
    },
    screenshotBucketKey: {
        baseName: "screenshotBucketKey",
        type: "boolean",
    },
    skipped: {
        baseName: "skipped",
        type: "boolean",
    },
    snapshotBucketKey: {
        baseName: "snapshotBucketKey",
        type: "boolean",
    },
    stepId: {
        baseName: "stepId",
        type: "number",
        format: "int64",
    },
    subTestStepDetails: {
        baseName: "subTestStepDetails",
        type: "Array<SyntheticsStepDetail>",
    },
    timeToInteractive: {
        baseName: "timeToInteractive",
        type: "number",
        format: "double",
    },
    type: {
        baseName: "type",
        type: "SyntheticsStepType",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "any",
    },
    vitalsMetrics: {
        baseName: "vitalsMetrics",
        type: "Array<SyntheticsCoreWebVitals>",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<SyntheticsStepDetailWarning>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsStepDetail.js.map