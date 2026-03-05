"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOResponseData = void 0;
/**
 * Data from search SLO response.
 */
class SearchSLOResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOResponseData.attributeTypeMap;
    }
}
exports.SearchSLOResponseData = SearchSLOResponseData;
/**
 * @ignore
 */
SearchSLOResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SearchSLOResponseDataAttributes",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchSLOResponseData.js.map