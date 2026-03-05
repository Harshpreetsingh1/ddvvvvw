"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionDataQualityMonitorOptions = void 0;
/**
 * Monitor configuration options for data quality queries.
 */
class MonitorFormulaAndFunctionDataQualityMonitorOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionDataQualityMonitorOptions.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionDataQualityMonitorOptions = MonitorFormulaAndFunctionDataQualityMonitorOptions;
/**
 * @ignore
 */
MonitorFormulaAndFunctionDataQualityMonitorOptions.attributeTypeMap = {
    crontabOverride: {
        baseName: "crontab_override",
        type: "string",
    },
    customSql: {
        baseName: "custom_sql",
        type: "string",
    },
    customWhere: {
        baseName: "custom_where",
        type: "string",
    },
    groupByColumns: {
        baseName: "group_by_columns",
        type: "Array<string>",
    },
    modelTypeOverride: {
        baseName: "model_type_override",
        type: "MonitorFormulaAndFunctionDataQualityModelTypeOverride",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorFormulaAndFunctionDataQualityMonitorOptions.js.map