"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionJSONPathTarget = void 0;
/**
 * An assertion for the `validatesJSONPath` operator.
 */
class SyntheticsAssertionJSONPathTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionJSONPathTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionJSONPathTarget = SyntheticsAssertionJSONPathTarget;
/**
 * @ignore
 */
SyntheticsAssertionJSONPathTarget.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "SyntheticsAssertionJSONPathOperator",
        required: true,
    },
    property: {
        baseName: "property",
        type: "string",
    },
    target: {
        baseName: "target",
        type: "SyntheticsAssertionJSONPathTargetTarget",
    },
    type: {
        baseName: "type",
        type: "SyntheticsAssertionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAssertionJSONPathTarget.js.map