"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachJiraIssueRequestDataRelationships = void 0;
/**
 * Relationships of the Jira issue to attach security findings to.
 */
class AttachJiraIssueRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachJiraIssueRequestDataRelationships.attributeTypeMap;
    }
}
exports.AttachJiraIssueRequestDataRelationships = AttachJiraIssueRequestDataRelationships;
/**
 * @ignore
 */
AttachJiraIssueRequestDataRelationships.attributeTypeMap = {
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
//# sourceMappingURL=AttachJiraIssueRequestDataRelationships.js.map