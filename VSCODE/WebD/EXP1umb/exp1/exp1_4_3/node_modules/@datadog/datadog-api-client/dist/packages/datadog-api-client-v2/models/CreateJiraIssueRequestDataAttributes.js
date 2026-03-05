"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJiraIssueRequestDataAttributes = void 0;
/**
 * Attributes of the Jira issue to create.
 */
class CreateJiraIssueRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateJiraIssueRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateJiraIssueRequestDataAttributes = CreateJiraIssueRequestDataAttributes;
/**
 * @ignore
 */
CreateJiraIssueRequestDataAttributes.attributeTypeMap = {
    assigneeId: {
        baseName: "assignee_id",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    fields: {
        baseName: "fields",
        type: "{ [key: string]: any; }",
    },
    priority: {
        baseName: "priority",
        type: "CasePriority",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateJiraIssueRequestDataAttributes.js.map