"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionEventQueryGroupBySort = void 0;
/**
 * Options for sorting group by results.
 */
class FormulaAndFunctionEventQueryGroupBySort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionEventQueryGroupBySort.attributeTypeMap;
    }
}
exports.FormulaAndFunctionEventQueryGroupBySort = FormulaAndFunctionEventQueryGroupBySort;
/**
 * @ignore
 */
FormulaAndFunctionEventQueryGroupBySort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "FormulaAndFunctionEventAggregation",
        required: true,
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    order: {
        baseName: "order",
        type: "QuerySortOrder",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionEventQueryGroupBySort.js.map