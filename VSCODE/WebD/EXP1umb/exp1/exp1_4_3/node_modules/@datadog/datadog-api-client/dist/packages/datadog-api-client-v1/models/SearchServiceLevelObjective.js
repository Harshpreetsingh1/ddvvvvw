"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchServiceLevelObjective = void 0;
/**
 * A service level objective data container.
 */
class SearchServiceLevelObjective {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SearchServiceLevelObjective.attributeTypeMap;
    }
}
exports.SearchServiceLevelObjective = SearchServiceLevelObjective;
/**
 * @ignore
 */
SearchServiceLevelObjective.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SearchServiceLevelObjectiveData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SearchServiceLevelObjective.js.map