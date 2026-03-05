"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchServiceLevelObjectiveAttributes = void 0;
/**
 * A service level objective object includes a service level indicator, thresholds
 * for one or more timeframes, and metadata (`name`, `description`, and `tags`).
 */
class SearchServiceLevelObjectiveAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchServiceLevelObjectiveAttributes.attributeTypeMap;
    }
}
exports.SearchServiceLevelObjectiveAttributes = SearchServiceLevelObjectiveAttributes;
/**
 * @ignore
 */
SearchServiceLevelObjectiveAttributes.attributeTypeMap = {
    allTags: {
        baseName: "all_tags",
        type: "Array<string>",
    },
    createdAt: {
        baseName: "created_at",
        type: "number",
        format: "int64",
    },
    creator: {
        baseName: "creator",
        type: "SLOCreator",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    envTags: {
        baseName: "env_tags",
        type: "Array<string>",
    },
    groups: {
        baseName: "groups",
        type: "Array<string>",
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
    name: {
        baseName: "name",
        type: "string",
    },
    overallStatus: {
        baseName: "overall_status",
        type: "Array<SLOOverallStatuses>",
    },
    query: {
        baseName: "query",
        type: "SearchSLOQuery",
    },
    serviceTags: {
        baseName: "service_tags",
        type: "Array<string>",
    },
    sloType: {
        baseName: "slo_type",
        type: "SLOType",
    },
    status: {
        baseName: "status",
        type: "SLOStatus",
    },
    teamTags: {
        baseName: "team_tags",
        type: "Array<string>",
    },
    thresholds: {
        baseName: "thresholds",
        type: "Array<SearchSLOThreshold>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchServiceLevelObjectiveAttributes.js.map