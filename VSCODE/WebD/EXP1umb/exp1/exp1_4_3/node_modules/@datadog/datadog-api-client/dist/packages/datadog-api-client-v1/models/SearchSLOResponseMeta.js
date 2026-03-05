"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchSLOResponseMeta = void 0;
/**
 * Searches metadata returned by the API.
 */
class SearchSLOResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchSLOResponseMeta.attributeTypeMap;
    }
}
exports.SearchSLOResponseMeta = SearchSLOResponseMeta;
/**
 * @ignore
 */
SearchSLOResponseMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "SearchSLOResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchSLOResponseMeta.js.map