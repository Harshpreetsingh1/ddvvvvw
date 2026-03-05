"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesWidgetRequest = void 0;
/**
 * Updated timeseries widget.
 */
class TimeseriesWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesWidgetRequest.attributeTypeMap;
    }
}
exports.TimeseriesWidgetRequest = TimeseriesWidgetRequest;
/**
 * @ignore
 */
TimeseriesWidgetRequest.attributeTypeMap = {
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    auditQuery: {
        baseName: "audit_query",
        type: "LogQueryDefinition",
    },
    displayType: {
        baseName: "display_type",
        type: "WidgetDisplayType",
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
    metadata: {
        baseName: "metadata",
        type: "Array<TimeseriesWidgetExpressionAlias>",
    },
    networkQuery: {
        baseName: "network_query",
        type: "LogQueryDefinition",
    },
    onRightYaxis: {
        baseName: "on_right_yaxis",
        type: "boolean",
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
        type: "WidgetRequestStyle",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeseriesWidgetRequest.js.map