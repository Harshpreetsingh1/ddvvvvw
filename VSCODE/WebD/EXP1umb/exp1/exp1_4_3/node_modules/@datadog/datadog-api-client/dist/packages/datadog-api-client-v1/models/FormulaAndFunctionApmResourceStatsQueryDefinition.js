"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionApmResourceStatsQueryDefinition = void 0;
/**
 * APM resource stats query using formulas and functions.
 */
class FormulaAndFunctionApmResourceStatsQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionApmResourceStatsQueryDefinition.attributeTypeMap;
    }
}
exports.FormulaAndFunctionApmResourceStatsQueryDefinition = FormulaAndFunctionApmResourceStatsQueryDefinition;
/**
 * @ignore
 */
FormulaAndFunctionApmResourceStatsQueryDefinition.attributeTypeMap = {
    crossOrgUuids: {
        baseName: "cross_org_uuids",
        type: "Array<string>",
    },
    dataSource: {
        baseName: "data_source",
        type: "FormulaAndFunctionApmResourceStatsDataSource",
        required: true,
    },
    env: {
        baseName: "env",
        type: "string",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    operationName: {
        baseName: "operation_name",
        type: "string",
    },
    primaryTagName: {
        baseName: "primary_tag_name",
        type: "string",
    },
    primaryTagValue: {
        baseName: "primary_tag_value",
        type: "string",
    },
    resourceName: {
        baseName: "resource_name",
        type: "string",
    },
    service: {
        baseName: "service",
        type: "string",
        required: true,
    },
    stat: {
        baseName: "stat",
        type: "FormulaAndFunctionApmResourceStatName",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionApmResourceStatsQueryDefinition.js.map