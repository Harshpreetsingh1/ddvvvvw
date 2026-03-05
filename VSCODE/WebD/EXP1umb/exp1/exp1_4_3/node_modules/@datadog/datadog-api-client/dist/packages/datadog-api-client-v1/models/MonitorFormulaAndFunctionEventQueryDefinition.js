"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionEventQueryDefinition = void 0;
/**
 * A formula and functions events query.
 */
class MonitorFormulaAndFunctionEventQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionEventQueryDefinition.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionEventQueryDefinition = MonitorFormulaAndFunctionEventQueryDefinition;
/**
 * @ignore
 */
MonitorFormulaAndFunctionEventQueryDefinition.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "MonitorFormulaAndFunctionEventQueryDefinitionCompute",
        required: true,
    },
    dataSource: {
        baseName: "data_source",
        type: "MonitorFormulaAndFunctionEventsDataSource",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<MonitorFormulaAndFunctionEventQueryGroupBy>",
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
        type: "MonitorFormulaAndFunctionEventQueryDefinitionSearch",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorFormulaAndFunctionEventQueryDefinition.js.map