"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HostMapRequest = void 0;
/**
 * Updated host map.
 */
class HostMapRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HostMapRequest.attributeTypeMap;
    }
}
exports.HostMapRequest = HostMapRequest;
/**
 * @ignore
 */
HostMapRequest.attributeTypeMap = {
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
//# sourceMappingURL=HostMapRequest.js.map