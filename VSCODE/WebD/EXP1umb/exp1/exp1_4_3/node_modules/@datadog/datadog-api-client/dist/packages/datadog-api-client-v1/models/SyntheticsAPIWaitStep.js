"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAPIWaitStep = void 0;
/**
 * The Wait step used in a Synthetic multi-step API test.
 */
class SyntheticsAPIWaitStep {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAPIWaitStep.attributeTypeMap;
    }
}
exports.SyntheticsAPIWaitStep = SyntheticsAPIWaitStep;
/**
 * @ignore
 */
SyntheticsAPIWaitStep.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    subtype: {
        baseName: "subtype",
        type: "SyntheticsAPIWaitStepSubtype",
        required: true,
    },
    value: {
        baseName: "value",
        type: "number",
        required: true,
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAPIWaitStep.js.map