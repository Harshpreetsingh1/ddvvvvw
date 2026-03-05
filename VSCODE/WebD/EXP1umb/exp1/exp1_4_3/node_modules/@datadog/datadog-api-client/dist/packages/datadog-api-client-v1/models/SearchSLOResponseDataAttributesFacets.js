"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOResponseDataAttributesFacets = void 0;
/**
 * Facets
 */
class SearchSLOResponseDataAttributesFacets {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOResponseDataAttributesFacets.attributeTypeMap;
    }
}
exports.SearchSLOResponseDataAttributesFacets = SearchSLOResponseDataAttributesFacets;
/**
 * @ignore
 */
SearchSLOResponseDataAttributesFacets.attributeTypeMap = {
    allTags: {
        baseName: "all_tags",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    creatorName: {
        baseName: "creator_name",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    envTags: {
        baseName: "env_tags",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    serviceTags: {
        baseName: "service_tags",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    sloType: {
        baseName: "slo_type",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectInt>",
    },
    target: {
        baseName: "target",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectInt>",
    },
    teamTags: {
        baseName: "team_tags",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    timeframe: {
        baseName: "timeframe",
        type: "Array<SearchSLOResponseDataAttributesFacetsObjectString>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchSLOResponseDataAttributesFacets.js.map