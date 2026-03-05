"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachJiraIssueRequestData = void 0;
/**
 * Data of the Jira issue to attach security findings to.
 */
class AttachJiraIssueRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachJiraIssueRequestData.attributeTypeMap;
    }
}
exports.AttachJiraIssueRequestData = AttachJiraIssueRequestData;
/**
 * @ignore
 */
AttachJiraIssueRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AttachJiraIssueRequestDataAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "AttachJiraIssueRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "JiraIssuesDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachJiraIssueRequestData.js.map