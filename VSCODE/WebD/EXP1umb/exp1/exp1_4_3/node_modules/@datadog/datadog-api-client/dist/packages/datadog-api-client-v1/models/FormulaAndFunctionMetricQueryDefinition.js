"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionMetricQueryDefinition = void 0;
/**
 * A formula and functions metrics query.
 */
class FormulaAndFunctionMetricQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionMetricQueryDefinition.attributeTypeMap;
    }
}
exports.FormulaAndFunctionMetricQueryDefinition = FormulaAndFunctionMetricQueryDefinition;
/**
 * @ignore
 */
FormulaAndFunctionMetricQueryDefinition.attributeTypeMap = {
    aggregator: {
        baseName: "aggregator",
        type: "FormulaAndFunctionMetricAggregation",
    },
    crossOrgUuids: {
        baseName: "cross_org_uuids",
        type: "Array<string>",
    },
    dataSource: {
        baseName: "data_source",
        type: "FormulaAndFunctionMetricDataSource",
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
    semanticMode: {
        baseName: "semantic_mode",
        type: "FormulaAndFunctionMetricSemanticMode",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionMetricQueryDefinition.js.map