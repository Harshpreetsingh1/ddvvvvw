"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseRelationships = void 0;
/**
 * Resources related to a case
 */
class CaseRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseRelationships.attributeTypeMap;
    }
}
exports.CaseRelationships = CaseRelationships;
/**
 * @ignore
 */
CaseRelationships.attributeTypeMap = {
    assignee: {
        baseName: "assignee",
        type: "NullableUserRelationship",
    },
    createdBy: {
        baseName: "created_by",
        type: "NullableUserRelationship",
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "NullableUserRelationship",
    },
    project: {
        baseName: "project",
        type: "ProjectRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseRelationships.js.map