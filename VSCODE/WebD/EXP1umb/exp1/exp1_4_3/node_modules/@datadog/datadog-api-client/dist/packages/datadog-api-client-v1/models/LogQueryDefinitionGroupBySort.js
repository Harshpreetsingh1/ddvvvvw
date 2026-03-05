"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogQueryDefinitionGroupBySort = void 0;
/**
 * Define a sorting method.
 */
class LogQueryDefinitionGroupBySort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogQueryDefinitionGroupBySort.attributeTypeMap;
    }
}
exports.LogQueryDefinitionGroupBySort = LogQueryDefinitionGroupBySort;
/**
 * @ignore
 */
LogQueryDefinitionGroupBySort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "string",
        required: true,
    },
    facet: {
        baseName: "facet",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "WidgetSort",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogQueryDefinitionGroupBySort.js.map