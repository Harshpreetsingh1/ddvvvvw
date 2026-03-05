"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLevelObjective = void 0;
/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */
class ServiceLevelObjective {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceLevelObjective.attributeTypeMap;
    }
}
exports.ServiceLevelObjective = ServiceLevelObjective;
/**
 * @ignore
 */
ServiceLevelObjective.attributeTypeMap = {
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
        required: true,
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
        required: true,
    },
    timeframe: {
        baseName: "timeframe",
        type: "SLOTimeframe",
    },
    type: {
        baseName: "type",
        type: "SLOType",
        required: true,
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
//# sourceMappingURL=ServiceLevelObjective.js.map