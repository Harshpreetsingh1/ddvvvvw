"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsRetentionAggSumUsage = void 0;
/**
 * Object containing indexed logs usage aggregated across organizations and months for a retention period.
 */
class LogsRetentionAggSumUsage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsRetentionAggSumUsage.attributeTypeMap;
    }
}
exports.LogsRetentionAggSumUsage = LogsRetentionAggSumUsage;
/**
 * @ignore
 */
LogsRetentionAggSumUsage.attributeTypeMap = {
    logsIndexedLogsUsageAggSum: {
        baseName: "logs_indexed_logs_usage_agg_sum",
        type: "number",
        format: "int64",
    },
    logsLiveIndexedLogsUsageAggSum: {
        baseName: "logs_live_indexed_logs_usage_agg_sum",
        type: "number",
        format: "int64",
    },
    logsRehydratedIndexedLogsUsageAggSum: {
        baseName: "logs_rehydrated_indexed_logs_usage_agg_sum",
        type: "number",
        format: "int64",
    },
    retention: {
        baseName: "retention",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsRetentionAggSumUsage.js.map