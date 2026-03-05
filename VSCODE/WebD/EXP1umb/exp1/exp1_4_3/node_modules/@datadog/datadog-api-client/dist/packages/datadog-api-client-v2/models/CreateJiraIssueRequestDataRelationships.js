"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJiraIssueRequestDataRelationships = void 0;
/**
 * Relationships of the Jira issue to create.
 */
class CreateJiraIssueRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateJiraIssueRequestDataRelationships.attributeTypeMap;
    }
}
exports.CreateJiraIssueRequestDataRelationships = CreateJiraIssueRequestDataRelationships;
/**
 * @ignore
 */
CreateJiraIssueRequestDataRelationships.attributeTypeMap = {
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
//# sourceMappingURL=CreateJiraIssueRequestDataRelationships.js.map