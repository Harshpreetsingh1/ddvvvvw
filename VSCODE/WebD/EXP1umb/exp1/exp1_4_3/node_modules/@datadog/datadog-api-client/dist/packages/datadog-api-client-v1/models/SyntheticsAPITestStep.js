"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPITestStep = void 0;
/**
 * The Test step used in a Synthetic multi-step API test.
 */
class SyntheticsAPITestStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPITestStep.attributeTypeMap;
    }
}
exports.SyntheticsAPITestStep = SyntheticsAPITestStep;
/**
 * @ignore
 */
SyntheticsAPITestStep.attributeTypeMap = {
    allowFailure: {
        baseName: "allowFailure",
        type: "boolean",
    },
    assertions: {
        baseName: "assertions",
        type: "Array<SyntheticsAssertion>",
        required: true,
    },
    exitIfSucceed: {
        baseName: "exitIfSucceed",
        type: "boolean",
    },
    extractedValues: {
        baseName: "extractedValues",
        type: "Array<SyntheticsParsingOptions>",
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
    request: {
        baseName: "request",
        type: "SyntheticsTestRequest",
        required: true,
    },
    retry: {
        baseName: "retry",
        type: "SyntheticsTestOptionsRetry",
    },
    subtype: {
        baseName: "subtype",
        type: "SyntheticsAPITestStepSubtype",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAPITestStep.js.map