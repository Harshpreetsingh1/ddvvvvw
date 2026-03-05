"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaseRequestDataRelationships = void 0;
/**
 * Relationships of the case to create.
 */
class CreateCaseRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateCaseRequestDataRelationships.attributeTypeMap;
    }
}
exports.CreateCaseRequestDataRelationships = CreateCaseRequestDataRelationships;
/**
 * @ignore
 */
CreateCaseRequestDataRelationships.attributeTypeMap = {
    findings: {
        baseName: "findings",
        type: "Findings",
        required: true,
    },
    project: {
        baseName: "project",
        type: "CaseManagementProject",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateCaseRequestDataRelationships.js.map