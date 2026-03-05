"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionEventQueryGroupBySort = void 0;
/**
 * Options for sorting group by results.
 */
class MonitorFormulaAndFunctionEventQueryGroupBySort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionEventQueryGroupBySort.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionEventQueryGroupBySort = MonitorFormulaAndFunctionEventQueryGroupBySort;
/**
 * @ignore
 */
MonitorFormulaAndFunctionEventQueryGroupBySort.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "MonitorFormulaAndFunctionEventAggregation",
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
//# sourceMappingURL=MonitorFormulaAndFunctionEventQueryGroupBySort.js.map