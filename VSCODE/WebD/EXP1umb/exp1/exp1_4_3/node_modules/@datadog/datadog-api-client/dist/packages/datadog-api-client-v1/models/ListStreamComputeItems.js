"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStreamComputeItems = void 0;
/**
 * List of facets and aggregations which to compute.
 */
class ListStreamComputeItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListStreamComputeItems.attributeTypeMap;
    }
}
exports.ListStreamComputeItems = ListStreamComputeItems;
/**
 * @ignore
 */
ListStreamComputeItems.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "ListStreamComputeAggregation",
        required: true,
    },
    facet: {
        baseName: "facet",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListStreamComputeItems.js.map