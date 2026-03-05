"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsAssertionJSONSchemaTargetTarget = void 0;
/**
 * Composed target for `validatesJSONSchema` operator.
 */
class SyntheticsAssertionJSONSchemaTargetTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsAssertionJSONSchemaTargetTarget.attributeTypeMap;
    }
}
exports.SyntheticsAssertionJSONSchemaTargetTarget = SyntheticsAssertionJSONSchemaTargetTarget;
/**
 * @ignore
 */
SyntheticsAssertionJSONSchemaTargetTarget.attributeTypeMap = {
    jsonSchema: {
        baseName: "jsonSchema",
        type: "string",
    },
    metaSchema: {
        baseName: "metaSchema",
        type: "SyntheticsAssertionJSONSchemaMetaSchema",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsAssertionJSONSchemaTargetTarget.js.map