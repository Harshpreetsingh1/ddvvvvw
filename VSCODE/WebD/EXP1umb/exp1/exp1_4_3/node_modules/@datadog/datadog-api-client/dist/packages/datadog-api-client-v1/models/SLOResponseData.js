"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOResponseData = void 0;
/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */
class SLOResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOResponseData.attributeTypeMap;
    }
}
exports.SLOResponseData = SLOResponseData;
/**
 * @ignore
 */
SLOResponseData.attributeTypeMap = {
    configuredAlertIds: {
        baseName: "configured_alert_ids",
        type: "Array<number>",
    },
    createdAt: {
        baseName: "created_at",
        type: "number",
        format: "int64",
    },
    creator: {
        baseName: "creator",
        type: "Creator",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    groups: {
        baseName: "groups",
        type: "Array<string>",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "number",
        format: "int64",
    },
    monitorIds: {
        baseName: "monitor_ids",
        type: "Array<number>",
    },
    monitorTags: {
        baseName: "monitor_tags",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "ServiceLevelObjectiveQuery",
    },
    sliSpecification: {
        baseName: "sli_specification",
        type: "SLOSliSpec",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    targetThreshold: {
        baseName: "target_threshold",
        type: "number",
        format: "double",
    },
    thresholds: {
        baseName: "thresholds",
        type: "Array<SLOThreshold>",
    },
    timeframe: {
        baseName: "timeframe",
        type: "SLOTimeframe",
    },
    type: {
        baseName: "type",
        type: "SLOType",
    },
    warningThreshold: {
        baseName: "warning_threshold",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOResponseData.js.map