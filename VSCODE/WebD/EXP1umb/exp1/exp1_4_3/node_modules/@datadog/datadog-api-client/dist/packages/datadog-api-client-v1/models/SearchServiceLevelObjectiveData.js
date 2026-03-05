"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchServiceLevelObjectiveData = void 0;
/**
 * A service level objective ID and attributes.
 */
class SearchServiceLevelObjectiveData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchServiceLevelObjectiveData.attributeTypeMap;
    }
}
exports.SearchServiceLevelObjectiveData = SearchServiceLevelObjectiveData;
/**
 * @ignore
 */
SearchServiceLevelObjectiveData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SearchServiceLevelObjectiveAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=SearchServiceLevelObjectiveData.js.map