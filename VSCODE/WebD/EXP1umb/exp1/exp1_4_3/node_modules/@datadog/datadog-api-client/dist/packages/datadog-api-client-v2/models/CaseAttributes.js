"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseAttributes = void 0;
/**
 * Case resource attributes
 */
class CaseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseAttributes.attributeTypeMap;
    }
}
exports.CaseAttributes = CaseAttributes;
/**
 * @ignore
 */
CaseAttributes.attributeTypeMap = {
    archivedAt: {
        baseName: "archived_at",
        type: "Date",
        format: "date-time",
    },
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: Array<string>; }",
    },
    closedAt: {
        baseName: "closed_at",
        type: "Date",
        format: "date-time",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    customAttributes: {
        baseName: "custom_attributes",
        type: "{ [key: string]: CustomAttributeValue; }",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    jiraIssue: {
        baseName: "jira_issue",
        type: "JiraIssue",
    },
    key: {
        baseName: "key",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    priority: {
        baseName: "priority",
        type: "CasePriority",
    },
    serviceNowTicket: {
        baseName: "service_now_ticket",
        type: "ServiceNowTicket",
    },
    status: {
        baseName: "status",
        type: "CaseStatus",
    },
    statusGroup: {
        baseName: "status_group",
        type: "CaseStatusGroup",
    },
    statusName: {
        baseName: "status_name",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CaseType",
    },
    typeId: {
        baseName: "type_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseAttributes.js.map