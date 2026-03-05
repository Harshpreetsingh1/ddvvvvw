"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionJSONPathTargetTarget = void 0;
/**
 * Composed target for `validatesJSONPath` operator.
 */
class SyntheticsAssertionJSONPathTargetTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionJSONPathTargetTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionJSONPathTargetTarget = SyntheticsAssertionJSONPathTargetTarget;
/**
 * @ignore
 */
SyntheticsAssertionJSONPathTargetTarget.attributeTypeMap = {
    elementsOperator: {
        baseName: "elementsOperator",
        type: "string",
    },
    jsonPath: {
        baseName: "jsonPath",
        type: "string",
    },
    operator: {
        baseName: "operator",
        type: "string",
    },
    targetValue: {
        baseName: "targetValue",
        type: "SyntheticsAssertionTargetValue",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAssertionJSONPathTargetTarget.js.map