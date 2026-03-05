"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScatterPlotRequest = void 0;
/**
 * Updated scatter plot.
 */
class ScatterPlotRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScatterPlotRequest.attributeTypeMap;
    }
}
exports.ScatterPlotRequest = ScatterPlotRequest;
/**
 * @ignore
 */
ScatterPlotRequest.attributeTypeMap = {
    aggregator: {
        baseName: "aggregator",
        type: "ScatterplotWidgetAggregator",
    },
    apmQuery: {
        baseName: "apm_query",
        type: "LogQueryDefinition",
    },
    eventQuery: {
        baseName: "event_query",
        type: "LogQueryDefinition",
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
//# sourceMappingURL=ScatterPlotRequest.js.map