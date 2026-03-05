"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPISubtestStep = void 0;
/**
 * The subtest step used in a Synthetics multi-step API test.
 */
class SyntheticsAPISubtestStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPISubtestStep.attributeTypeMap;
    }
}
exports.SyntheticsAPISubtestStep = SyntheticsAPISubtestStep;
/**
 * @ignore
 */
SyntheticsAPISubtestStep.attributeTypeMap = {
    allowFailure: {
        baseName: "allowFailure",
        type: "boolean",
    },
    alwaysExecute: {
        baseName: "alwaysExecute",
        type: "boolean",
    },
    exitIfSucceed: {
        baseName: "exitIfSucceed",
        type: "boolean",
    },
    extractedValuesFromScript: {
        baseName: "extractedValuesFromScript",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    isCritical: {
        baseName: "isCritical",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    retry: {
        baseName: "retry",
        type: "SyntheticsTestOptionsRetry",
    },
    subtestPublicId: {
        baseName: "subtestPublicId",
        type: "string",
        required: true,
    },
    subtype: {
        baseName: "subtype",
        type: "SyntheticsAPISubtestStepSubtype",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAPISubtestStep.js.map