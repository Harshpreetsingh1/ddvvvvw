"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachCaseRequestDataRelationships = void 0;
/**
 * Relationships of the case to attach security findings to.
 */
class AttachCaseRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachCaseRequestDataRelationships.attributeTypeMap;
    }
}
exports.AttachCaseRequestDataRelationships = AttachCaseRequestDataRelationships;
/**
 * @ignore
 */
AttachCaseRequestDataRelationships.attributeTypeMap = {
    findings: {
        baseName: "findings",
        type: "Findings",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachCaseRequestDataRelationships.js.map