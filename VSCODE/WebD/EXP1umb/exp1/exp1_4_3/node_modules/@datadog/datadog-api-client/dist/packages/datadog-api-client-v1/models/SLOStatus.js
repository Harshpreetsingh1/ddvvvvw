"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOStatus = void 0;
/**
 * Status of the SLO's primary timeframe.
 */
class SLOStatus {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOStatus.attributeTypeMap;
    }
}
exports.SLOStatus = SLOStatus;
/**
 * @ignore
 */
SLOStatus.attributeTypeMap = {
    calculationError: {
        baseName: "calculation_error",
        type: "string",
    },
    errorBudgetRemaining: {
        baseName: "error_budget_remaining",
        type: "number",
        format: "double",
    },
    indexedAt: {
        baseName: "indexed_at",
        type: "number",
        format: "int64",
    },
    rawErrorBudgetRemaining: {
        baseName: "raw_error_budget_remaining",
        type: "SLORawErrorBudgetRemaining",
    },
    sli: {
        baseName: "sli",
        type: "number",
        format: "double",
    },
    spanPrecision: {
        baseName: "span_precision",
        type: "number",
        format: "int64",
    },
    state: {
        baseName: "state",
        type: "SLOState",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOStatus.js.map