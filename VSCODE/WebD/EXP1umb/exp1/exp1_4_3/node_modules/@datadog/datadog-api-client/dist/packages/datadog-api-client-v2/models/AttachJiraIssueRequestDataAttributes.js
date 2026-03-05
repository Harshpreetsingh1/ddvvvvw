"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachJiraIssueRequestDataAttributes = void 0;
/**
 * Attributes of the Jira issue to attach security findings to.
 */
class AttachJiraIssueRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachJiraIssueRequestDataAttributes.attributeTypeMap;
    }
}
exports.AttachJiraIssueRequestDataAttributes = AttachJiraIssueRequestDataAttributes;
/**
 * @ignore
 */
AttachJiraIssueRequestDataAttributes.attributeTypeMap = {
    jiraIssueUrl: {
        baseName: "jira_issue_url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachJiraIssueRequestDataAttributes.js.map