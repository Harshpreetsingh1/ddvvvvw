"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsMobileStep = void 0;
/**
 * The steps used in a Synthetic mobile test.
 */
class SyntheticsMobileStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsMobileStep.attributeTypeMap;
    }
}
exports.SyntheticsMobileStep = SyntheticsMobileStep;
/**
 * @ignore
 */
SyntheticsMobileStep.attributeTypeMap = {
    allowFailure: {
        baseName: "allowFailure",
        type: "boolean",
    },
    hasNewStepElement: {
        baseName: "hasNewStepElement",
        type: "boolean",
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
    noScreenshot: {
        baseName: "noScreenshot",
        type: "boolean",
    },
    params: {
        baseName: "params",
        type: "SyntheticsMobileStepParams",
        required: true,
    },
    publicId: {
        baseName: "publicId",
        type: "string",
    },
    timeout: {
        baseName: "timeout",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "SyntheticsMobileStepType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsMobileStep.js.map