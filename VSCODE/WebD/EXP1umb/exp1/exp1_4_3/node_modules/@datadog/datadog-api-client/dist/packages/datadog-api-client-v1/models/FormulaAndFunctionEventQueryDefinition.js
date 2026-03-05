"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionEventQueryDefinition = void 0;
/**
 * A formula and functions events query.
 */
class FormulaAndFunctionEventQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionEventQueryDefinition.attributeTypeMap;
    }
}
exports.FormulaAndFunctionEventQueryDefinition = FormulaAndFunctionEventQueryDefinition;
/**
 * @ignore
 */
FormulaAndFunctionEventQueryDefinition.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "FormulaAndFunctionEventQueryDefinitionCompute",
        required: true,
    },
    crossOrgUuids: {
        baseName: "cross_org_uuids",
        type: "Array<string>",
    },
    dataSource: {
        baseName: "data_source",
        type: "FormulaAndFunctionEventsDataSource",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<FormulaAndFunctionEventQueryGroupBy>",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    search: {
        baseName: "search",
        type: "FormulaAndFunctionEventQueryDefinitionSearch",
    },
    storage: {
        baseName: "storage",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FormulaAndFunctionEventQueryDefinition.js.map