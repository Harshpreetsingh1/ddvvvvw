"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryMonitor = void 0;
/**
 * An object that holds an SLI value and its associated data. It can represent an SLO's overall SLI value.
 * This can also represent the SLI value for a specific monitor in multi-monitor SLOs, or a group in grouped SLOs.
 */
class SLOHistoryMonitor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryMonitor.attributeTypeMap;
    }
}
exports.SLOHistoryMonitor = SLOHistoryMonitor;
/**
 * @ignore
 */
SLOHistoryMonitor.attributeTypeMap = {
    errorBudgetRemaining: {
        baseName: "error_budget_remaining",
        type: "{ [key: string]: number; }",
    },
    errors: {
        baseName: "errors",
        type: "Array<SLOHistoryResponseErrorWithType>",
    },
    group: {
        baseName: "group",
        type: "string",
    },
    history: {
        baseName: "history",
        type: "Array<[number, number]>",
    },
    monitorModified: {
        baseName: "monitor_modified",
        type: "number",
        format: "int64",
    },
    monitorType: {
        baseName: "monitor_type",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    precision: {
        baseName: "precision",
        type: "number",
        format: "double",
    },
    preview: {
        baseName: "preview",
        type: "boolean",
    },
    sliValue: {
        baseName: "sli_value",
        type: "number",
        format: "double",
    },
    spanPrecision: {
        baseName: "span_precision",
        type: "number",
        format: "double",
    },
    uptime: {
        baseName: "uptime",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryMonitor.js.map