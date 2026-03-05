"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOResponseDataAttributes = void 0;
/**
 * Attributes
 */
class SearchSLOResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOResponseDataAttributes.attributeTypeMap;
    }
}
exports.SearchSLOResponseDataAttributes = SearchSLOResponseDataAttributes;
/**
 * @ignore
 */
SearchSLOResponseDataAttributes.attributeTypeMap = {
    facets: {
        baseName: "facets",
        type: "SearchSLOResponseDataAttributesFacets",
    },
    slos: {
        baseName: "slos",
        type: "Array<SearchServiceLevelObjective>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchSLOResponseDataAttributes.js.map