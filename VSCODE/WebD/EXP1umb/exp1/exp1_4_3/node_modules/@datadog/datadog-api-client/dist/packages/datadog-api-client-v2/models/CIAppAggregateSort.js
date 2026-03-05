"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppAggregateSort = void 0;
/**
 * A sort rule. The `aggregation` field is required when `type` is `measure`.
 */
class CIAppAggregateSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppAggregateSort.attributeTypeMap;
    }
}
exports.CIAppAggregateSort = CIAppAggregateSort;
/**
 * @ignore
 */
CIAppAggregateSort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "CIAppAggregationFunction",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "CIAppSortOrder",
    },
    type: {
        baseName: "type",
        type: "CIAppAggregateSortType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppAggregateSort.js.map