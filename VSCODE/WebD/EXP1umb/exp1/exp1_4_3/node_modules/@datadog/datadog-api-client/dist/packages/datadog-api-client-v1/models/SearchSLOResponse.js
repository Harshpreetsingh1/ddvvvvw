"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOResponse = void 0;
/**
 * A search SLO response containing results from the search query.
 */
class SearchSLOResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOResponse.attributeTypeMap;
    }
}
exports.SearchSLOResponse = SearchSLOResponse;
/**
 * @ignore
 */
SearchSLOResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SearchSLOResponseData",
    },
    links: {
        baseName: "links",
        type: "SearchSLOResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "SearchSLOResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchSLOResponse.js.map