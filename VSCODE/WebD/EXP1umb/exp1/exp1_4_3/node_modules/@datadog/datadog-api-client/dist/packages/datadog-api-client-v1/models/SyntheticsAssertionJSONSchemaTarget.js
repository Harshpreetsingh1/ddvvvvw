"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionJSONSchemaTarget = void 0;
/**
 * An assertion for the `validatesJSONSchema` operator.
 */
class SyntheticsAssertionJSONSchemaTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionJSONSchemaTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionJSONSchemaTarget = SyntheticsAssertionJSONSchemaTarget;
/**
 * @ignore
 */
SyntheticsAssertionJSONSchemaTarget.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "SyntheticsAssertionJSONSchemaOperator",
        required: true,
    },
    target: {
        baseName: "target",
        type: "SyntheticsAssertionJSONSchemaTargetTarget",
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
//# sourceMappingURL=SyntheticsAssertionJSONSchemaTarget.js.map