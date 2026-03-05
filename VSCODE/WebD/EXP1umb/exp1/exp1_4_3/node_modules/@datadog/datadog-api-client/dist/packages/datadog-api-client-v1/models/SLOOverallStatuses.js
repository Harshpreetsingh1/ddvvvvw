"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOOverallStatuses = void 0;
/**
 * Overall status of the SLO by timeframes.
 */
class SLOOverallStatuses {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOOverallStatuses.attributeTypeMap;
    }
}
exports.SLOOverallStatuses = SLOOverallStatuses;
/**
 * @ignore
 */
SLOOverallStatuses.attributeTypeMap = {
    error: {
        baseName: "error",
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
    spanPrecision: {
        baseName: "span_precision",
        type: "number",
        format: "int64",
    },
    state: {
        baseName: "state",
        type: "SLOState",
    },
    status: {
        baseName: "status",
        type: "number",
        format: "double",
    },
    target: {
        baseName: "target",
        type: "number",
        format: "double",
    },
    timeframe: {
        baseName: "timeframe",
        type: "SLOTimeframe",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOOverallStatuses.js.map