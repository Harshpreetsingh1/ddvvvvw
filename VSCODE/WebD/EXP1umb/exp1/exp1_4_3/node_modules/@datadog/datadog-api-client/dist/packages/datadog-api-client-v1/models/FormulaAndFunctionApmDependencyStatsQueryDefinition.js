"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionApmDependencyStatsQueryDefinition = void 0;
/**
 * A formula and functions APM dependency stats query.
 */
class FormulaAndFunctionApmDependencyStatsQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionApmDependencyStatsQueryDefinition.attributeTypeMap;
    }
}
exports.FormulaAndFunctionApmDependencyStatsQueryDefinition = FormulaAndFunctionApmDependencyStatsQueryDefinition;
/**
 * @ignore
 */
FormulaAndFunctionApmDependencyStatsQueryDefinition.attributeTypeMap = {
    crossOrgUuids: {
        baseName: "cross_org_uuids",
        type: "Array<string>",
    },
    dataSource: {
        baseName: "data_source",
        type: "FormulaAndFunctionApmDependencyStatsDataSource",
        required: true,
    },
    env: {
        baseName: "env",
        type: "string",
        required: true,
    },
    isUpstream: {
        baseName: "is_upstream",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    operationName: {
        baseName: "operation_name",
        type: "string",
        required: true,
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
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
        required: true,
    },
    stat: {
        baseName: "stat",
        type: "FormulaAndFunctionApmDependencyStatName",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionApmDependencyStatsQueryDefinition.js.map