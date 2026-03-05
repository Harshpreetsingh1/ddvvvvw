"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseCreateRelationships = void 0;
/**
 * Relationships formed with the case on creation
 */
class CaseCreateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseCreateRelationships.attributeTypeMap;
    }
}
exports.CaseCreateRelationships = CaseCreateRelationships;
/**
 * @ignore
 */
CaseCreateRelationships.attributeTypeMap = {
    assignee: {
        baseName: "assignee",
        type: "NullableUserRelationship",
    },
    project: {
        baseName: "project",
        type: "ProjectRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseCreateRelationships.js.map