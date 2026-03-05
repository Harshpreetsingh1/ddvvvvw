"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionSLOQueryDefinition = void 0;
/**
 * A formula and functions metrics query.
 */
class FormulaAndFunctionSLOQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionSLOQueryDefinition.attributeTypeMap;
    }
}
exports.FormulaAndFunctionSLOQueryDefinition = FormulaAndFunctionSLOQueryDefinition;
/**
 * @ignore
 */
FormulaAndFunctionSLOQueryDefinition.attributeTypeMap = {
    additionalQueryFilters: {
        baseName: "additional_query_filters",
        type: "string",
    },
    crossOrgUuids: {
        baseName: "cross_org_uuids",
        type: "Array<string>",
    },
    dataSource: {
        baseName: "data_source",
        type: "FormulaAndFunctionSLODataSource",
        required: true,
    },
    groupMode: {
        baseName: "group_mode",
        type: "FormulaAndFunctionSLOGroupMode",
    },
    measure: {
        baseName: "measure",
        type: "FormulaAndFunctionSLOMeasure",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    sloId: {
        baseName: "slo_id",
        type: "string",
        required: true,
    },
    sloQueryType: {
        baseName: "slo_query_type",
        type: "FormulaAndFunctionSLOQueryType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionSLOQueryDefinition.js.map