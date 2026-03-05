"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttachJiraIssueRequest = void 0;
/**
 * Request for attaching security findings to a Jira issue.
 */
class AttachJiraIssueRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AttachJiraIssueRequest.attributeTypeMap;
    }
}
exports.AttachJiraIssueRequest = AttachJiraIssueRequest;
/**
 * @ignore
 */
AttachJiraIssueRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AttachJiraIssueRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AttachJiraIssueRequest.js.map