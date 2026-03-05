"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJiraIssueRequestData = void 0;
/**
 * Data of the Jira issue to create.
 */
class CreateJiraIssueRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateJiraIssueRequestData.attributeTypeMap;
    }
}
exports.CreateJiraIssueRequestData = CreateJiraIssueRequestData;
/**
 * @ignore
 */
CreateJiraIssueRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateJiraIssueRequestDataAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "CreateJiraIssueRequestDataRelationships",
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
//# sourceMappingURL=CreateJiraIssueRequestData.js.map