"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionWidgetRequest = void 0;
/**
 * Updated distribution widget.
 */
class DistributionWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DistributionWidgetRequest.attributeTypeMap;
    }
}
exports.DistributionWidgetRequest = DistributionWidgetRequest;
/**
 * @ignore
 */
DistributionWidgetRequest.attributeTypeMap = {
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    apmStatsQuery: {
        baseName: "apm_stats_query",
        type: "ApmStatsQueryDefinition",
    },
    eventQuery: {
        baseName: "event_query",
        type: "LogQueryDefinition",
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
        type: "DistributionWidgetHistogramRequestQuery",
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
//# sourceMappingURL=DistributionWidgetRequest.js.map