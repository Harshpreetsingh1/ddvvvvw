"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeWidgetRequest = void 0;
/**
 * Updated change widget.
 */
class ChangeWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeWidgetRequest.attributeTypeMap;
    }
}
exports.ChangeWidgetRequest = ChangeWidgetRequest;
/**
 * @ignore
 */
ChangeWidgetRequest.attributeTypeMap = {
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    changeType: {
        baseName: "change_type",
        type: "WidgetChangeType",
    },
    compareTo: {
        baseName: "compare_to",
        type: "WidgetCompareTo",
    },
    eventQuery: {
        baseName: "event_query",
        type: "LogQueryDefinition",
    },
    formulas: {
        baseName: "formulas",
        type: "Array<WidgetFormula>",
    },
    increaseGood: {
        baseName: "increase_good",
        type: "boolean",
    },
    logQuery: {
        baseName: "log_query",
        type: "LogQueryDefinition",
    },
    networkQuery: {
        baseName: "network_query",
        type: "LogQueryDefinition",
    },
    orderBy: {
        baseName: "order_by",
        type: "WidgetOrderBy",
    },
    orderDir: {
        baseName: "order_dir",
        type: "WidgetSort",
    },
    processQuery: {
        baseName: "process_query",
        type: "ProcessQueryDefinition",
    },
    profileMetricsQuery: {
        baseName: "profile_metrics_query",
        type: "LogQueryDefinition",
    },
    q: {
        baseName: "q",
        type: "string",
    },
    queries: {
        baseName: "queries",
        type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    responseFormat: {
        baseName: "response_format",
        type: "FormulaAndFunctionResponseFormat",
    },
    rumQuery: {
        baseName: "rum_query",
        type: "LogQueryDefinition",
    },
    securityQuery: {
        baseName: "security_query",
        type: "LogQueryDefinition",
    },
    showPresent: {
        baseName: "show_present",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeWidgetRequest.js.map