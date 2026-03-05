"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionProcessQueryDefinition = void 0;
/**
 * Process query using formulas and functions.
 */
class FormulaAndFunctionProcessQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionProcessQueryDefinition.attributeTypeMap;
    }
}
exports.FormulaAndFunctionProcessQueryDefinition = FormulaAndFunctionProcessQueryDefinition;
/**
 * @ignore
 */
FormulaAndFunctionProcessQueryDefinition.attributeTypeMap = {
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
        type: "FormulaAndFunctionProcessQueryDataSource",
        required: true,
    },
    isNormalizedCpu: {
        baseName: "is_normalized_cpu",
        type: "boolean",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    metric: {
        baseName: "metric",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    sort: {
        baseName: "sort",
        type: "QuerySortOrder",
    },
    tagFilters: {
        baseName: "tag_filters",
        type: "Array<string>",
    },
    textFilter: {
        baseName: "text_filter",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionProcessQueryDefinition.js.map