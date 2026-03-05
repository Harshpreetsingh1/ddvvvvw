"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeatMapWidgetRequest = void 0;
/**
 * Updated heat map widget.
 */
class HeatMapWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HeatMapWidgetRequest.attributeTypeMap;
    }
}
exports.HeatMapWidgetRequest = HeatMapWidgetRequest;
/**
 * @ignore
 */
HeatMapWidgetRequest.attributeTypeMap = {
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    eventQuery: {
        baseName: "event_query",
        type: "EventQueryDefinition",
    },
    formulas: {
        baseName: "formulas",
        type: "Array<WidgetFormula>",
    },
    logQuery: {
        baseName: "log_query",
        type: "LogQueryDefinition",
    },
    networkQuery: {
        baseName: "network_query",
        type: "LogQueryDefinition",
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
    query: {
        baseName: "query",
        type: "FormulaAndFunctionMetricQueryDefinition",
    },
    requestType: {
        baseName: "request_type",
        type: "WidgetHistogramRequestType",
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
    style: {
        baseName: "style",
        type: "WidgetStyle",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HeatMapWidgetRequest.js.map