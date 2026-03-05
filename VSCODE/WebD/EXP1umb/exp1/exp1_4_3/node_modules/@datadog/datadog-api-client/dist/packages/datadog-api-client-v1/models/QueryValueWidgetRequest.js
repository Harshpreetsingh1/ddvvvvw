"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryValueWidgetRequest = void 0;
/**
 * Updated query value widget.
 */
class QueryValueWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryValueWidgetRequest.attributeTypeMap;
    }
}
exports.QueryValueWidgetRequest = QueryValueWidgetRequest;
/**
 * @ignore
 */
QueryValueWidgetRequest.attributeTypeMap = {
    aggregator: {
        baseName: "aggregator",
        type: "WidgetAggregator",
    },
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    auditQuery: {
        baseName: "audit_query",
        type: "LogQueryDefinition",
    },
    conditionalFormats: {
        baseName: "conditional_formats",
        type: "Array<WidgetConditionalFormat>",
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryValueWidgetRequest.js.map