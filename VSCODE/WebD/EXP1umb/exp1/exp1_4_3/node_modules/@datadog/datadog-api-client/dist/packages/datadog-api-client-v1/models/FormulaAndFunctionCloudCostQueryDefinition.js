"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionCloudCostQueryDefinition = void 0;
/**
 * A formula and functions Cloud Cost query.
 */
class FormulaAndFunctionCloudCostQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionCloudCostQueryDefinition.attributeTypeMap;
    }
}
exports.FormulaAndFunctionCloudCostQueryDefinition = FormulaAndFunctionCloudCostQueryDefinition;
/**
 * @ignore
 */
FormulaAndFunctionCloudCostQueryDefinition.attributeTypeMap = {
    aggregator: {
        baseName: "aggregator",
        type: "WidgetAggregator",
    },
    crossOrgUuids: {
        baseName: "cross_org_uuids",
        type: "Array<string>",
    },
    dataSource: {
        baseName: "data_source",
        type: "FormulaAndFunctionCloudCostDataSource",
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
//# sourceMappingURL=FormulaAndFunctionCloudCostQueryDefinition.js.map