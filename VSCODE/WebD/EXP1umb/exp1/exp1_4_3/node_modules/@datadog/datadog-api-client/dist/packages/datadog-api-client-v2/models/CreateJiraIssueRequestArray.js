"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateJiraIssueRequestArray = void 0;
/**
 * List of requests to create Jira issues for security findings.
 */
class CreateJiraIssueRequestArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateJiraIssueRequestArray.attributeTypeMap;
    }
}
exports.CreateJiraIssueRequestArray = CreateJiraIssueRequestArray;
/**
 * @ignore
 */
CreateJiraIssueRequestArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CreateJiraIssueRequestData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateJiraIssueRequestArray.js.map