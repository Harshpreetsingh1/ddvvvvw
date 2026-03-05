"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsStep = void 0;
/**
 * The steps used in a Synthetic browser test.
 */
class SyntheticsStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsStep.attributeTypeMap;
    }
}
exports.SyntheticsStep = SyntheticsStep;
/**
 * @ignore
 */
SyntheticsStep.attributeTypeMap = {
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
    isCritical: {
        baseName: "isCritical",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    noScreenshot: {
        baseName: "noScreenshot",
        type: "boolean",
    },
    params: {
        baseName: "params",
        type: "any",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    timeout: {
        baseName: "timeout",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "SyntheticsStepType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsStep.js.map