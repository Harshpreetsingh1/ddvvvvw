"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWidgetRequest = void 0;
/**
 * Updated table widget.
 */
class TableWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableWidgetRequest.attributeTypeMap;
    }
}
exports.TableWidgetRequest = TableWidgetRequest;
/**
 * @ignore
 */
TableWidgetRequest.attributeTypeMap = {
    aggregator: {
        baseName: "aggregator",
        type: "WidgetAggregator",
    },
    alias: {
        baseName: "alias",
        type: "string",
    },
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    apmStatsQuery: {
        baseName: "apm_stats_query",
        type: "ApmStatsQueryDefinition",
    },
    cellDisplayMode: {
        baseName: "cell_display_mode",
        type: "Array<TableWidgetCellDisplayMode>",
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
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    logQuery: {
        baseName: "log_query",
        type: "LogQueryDefinition",
    },
    networkQuery: {
        baseName: "network_query",
        type: "LogQueryDefinition",
    },
    order: {
        baseName: "order",
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
    sort: {
        baseName: "sort",
        type: "WidgetSortBy",
    },
    textFormats: {
        baseName: "text_formats",
        type: "Array<Array<TableWidgetTextFormatRule>>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableWidgetRequest.js.map