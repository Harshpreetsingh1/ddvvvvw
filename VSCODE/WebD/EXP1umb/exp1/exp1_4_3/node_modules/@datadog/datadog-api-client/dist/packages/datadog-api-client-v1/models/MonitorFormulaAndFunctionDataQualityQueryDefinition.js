"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionDataQualityQueryDefinition = void 0;
/**
 * A formula and functions data quality query.
 */
class MonitorFormulaAndFunctionDataQualityQueryDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionDataQualityQueryDefinition.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionDataQualityQueryDefinition = MonitorFormulaAndFunctionDataQualityQueryDefinition;
/**
 * @ignore
 */
MonitorFormulaAndFunctionDataQualityQueryDefinition.attributeTypeMap = {
    dataSource: {
        baseName: "data_source",
        type: "MonitorFormulaAndFunctionDataQualityDataSource",
        required: true,
    },
    filter: {
        baseName: "filter",
        type: "string",
        required: true,
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
    },
    measure: {
        baseName: "measure",
        type: "string",
        required: true,
    },
    monitorOptions: {
        baseName: "monitor_options",
        type: "MonitorFormulaAndFunctionDataQualityMonitorOptions",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    schemaVersion: {
        baseName: "schema_version",
        type: "string",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorFormulaAndFunctionDataQualityQueryDefinition.js.map