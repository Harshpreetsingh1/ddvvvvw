"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorUpdateRequest = void 0;
/**
 * Object describing a monitor update request.
 */
class MonitorUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorUpdateRequest.attributeTypeMap;
    }
}
exports.MonitorUpdateRequest = MonitorUpdateRequest;
/**
 * @ignore
 */
MonitorUpdateRequest.attributeTypeMap = {
    assets: {
        baseName: "assets",
        type: "Array<MonitorAsset>",
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    creator: {
        baseName: "creator",
        type: "Creator",
    },
    deleted: {
        baseName: "deleted",
        type: "Date",
        format: "date-time",
    },
    draftStatus: {
        baseName: "draft_status",
        type: "MonitorDraftStatus",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    multi: {
        baseName: "multi",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    options: {
        baseName: "options",
        type: "MonitorOptions",
    },
    overallState: {
        baseName: "overall_state",
        type: "MonitorOverallStates",
    },
    priority: {
        baseName: "priority",
        type: "number",
        format: "int64",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    restrictedRoles: {
        baseName: "restricted_roles",
        type: "Array<string>",
    },
    state: {
        baseName: "state",
        type: "MonitorState",
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
//# sourceMappingURL=MonitorUpdateRequest.js.map