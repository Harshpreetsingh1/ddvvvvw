"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorFormulaAndFunctionEventQueryDefinitionCompute = void 0;
/**
 * Compute options.
 */
class MonitorFormulaAndFunctionEventQueryDefinitionCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorFormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
    }
}
exports.MonitorFormulaAndFunctionEventQueryDefinitionCompute = MonitorFormulaAndFunctionEventQueryDefinitionCompute;
/**
 * @ignore
 */
MonitorFormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "MonitorFormulaAndFunctionEventAggregation",
        required: true,
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorFormulaAndFunctionEventQueryDefinitionCompute.js.map