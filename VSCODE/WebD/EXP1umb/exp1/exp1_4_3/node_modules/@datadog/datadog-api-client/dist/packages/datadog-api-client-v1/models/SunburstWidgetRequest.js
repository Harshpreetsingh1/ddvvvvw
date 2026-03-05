"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunburstWidgetRequest = void 0;
/**
 * Request definition of sunburst widget.
 */
class SunburstWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SunburstWidgetRequest.attributeTypeMap;
    }
}
exports.SunburstWidgetRequest = SunburstWidgetRequest;
/**
 * @ignore
 */
SunburstWidgetRequest.attributeTypeMap = {
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    auditQuery: {
        baseName: "audit_query",
        type: "LogQueryDefinition",
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
    style: {
        baseName: "style",
        type: "WidgetStyle",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SunburstWidgetRequest.js.map