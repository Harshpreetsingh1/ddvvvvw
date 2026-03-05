"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormulaAndFunctionEventQueryDefinitionCompute = void 0;
/**
 * Compute options.
 */
class FormulaAndFunctionEventQueryDefinitionCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap;
    }
}
exports.FormulaAndFunctionEventQueryDefinitionCompute = FormulaAndFunctionEventQueryDefinitionCompute;
/**
 * @ignore
 */
FormulaAndFunctionEventQueryDefinitionCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "FormulaAndFunctionEventAggregation",
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
//# sourceMappingURL=FormulaAndFunctionEventQueryDefinitionCompute.js.map