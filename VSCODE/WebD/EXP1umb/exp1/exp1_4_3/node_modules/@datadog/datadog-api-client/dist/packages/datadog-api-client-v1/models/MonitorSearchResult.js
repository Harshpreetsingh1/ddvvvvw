"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSearchResult = void 0;
/**
 * Holds search results.
 */
class MonitorSearchResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorSearchResult.attributeTypeMap;
    }
}
exports.MonitorSearchResult = MonitorSearchResult;
/**
 * @ignore
 */
MonitorSearchResult.attributeTypeMap = {
    classification: {
        baseName: "classification",
        type: "string",
    },
    creator: {
        baseName: "creator",
        type: "Creator",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    lastTriggeredTs: {
        baseName: "last_triggered_ts",
        type: "number",
        format: "int64",
    },
    metrics: {
        baseName: "metrics",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    notifications: {
        baseName: "notifications",
        type: "Array<MonitorSearchResultNotification>",
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        format: "int64",
    },
    qualityIssues: {
        baseName: "quality_issues",
        type: "Array<string>",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    scopes: {
        baseName: "scopes",
        type: "Array<string>",
    },
    status: {
        baseName: "status",
        type: "MonitorOverallStates",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "MonitorType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorSearchResult.js.map