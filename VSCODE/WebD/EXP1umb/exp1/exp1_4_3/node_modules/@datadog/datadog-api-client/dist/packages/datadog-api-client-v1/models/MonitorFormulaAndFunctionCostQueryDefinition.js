"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionCostQueryDefinition = void 0;
/**
 * A formula and functions cost query.
 */
class MonitorFormulaAndFunctionCostQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionCostQueryDefinition.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionCostQueryDefinition = MonitorFormulaAndFunctionCostQueryDefinition;
/**
 * @ignore
 */
MonitorFormulaAndFunctionCostQueryDefinition.attributeTypeMap = {
    aggregator: {
        baseName: "aggregator",
        type: "MonitorFormulaAndFunctionCostAggregator",
    },
    dataSource: {
        baseName: "data_source",
        type: "MonitorFormulaAndFunctionCostDataSource",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorFormulaAndFunctionCostQueryDefinition.js.map