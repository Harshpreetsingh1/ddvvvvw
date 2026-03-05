"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceLevelObjectiveRequest = void 0;
/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, `tags`, etc.).
 */
class ServiceLevelObjectiveRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceLevelObjectiveRequest.attributeTypeMap;
    }
}
exports.ServiceLevelObjectiveRequest = ServiceLevelObjectiveRequest;
/**
 * @ignore
 */
ServiceLevelObjectiveRequest.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    groups: {
        baseName: "groups",
        type: "Array<string>",
    },
    monitorIds: {
        baseName: "monitor_ids",
        type: "Array<number>",
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
//# sourceMappingURL=ServiceLevelObjectiveRequest.js.map