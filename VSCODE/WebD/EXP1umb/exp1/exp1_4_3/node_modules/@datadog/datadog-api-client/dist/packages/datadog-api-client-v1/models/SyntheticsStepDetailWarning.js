"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsStepDetailWarning = void 0;
/**
 * Object collecting warnings for a given step.
 */
class SyntheticsStepDetailWarning {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsStepDetailWarning.attributeTypeMap;
    }
}
exports.SyntheticsStepDetailWarning = SyntheticsStepDetailWarning;
/**
 * @ignore
 */
SyntheticsStepDetailWarning.attributeTypeMap = {
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsWarningType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsStepDetailWarning.js.map