"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsRetentionSumUsage = void 0;
/**
 * Object containing indexed logs usage grouped by retention period and summed.
 */
class LogsRetentionSumUsage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsRetentionSumUsage.attributeTypeMap;
    }
}
exports.LogsRetentionSumUsage = LogsRetentionSumUsage;
/**
 * @ignore
 */
LogsRetentionSumUsage.attributeTypeMap = {
    logsIndexedLogsUsageSum: {
        baseName: "logs_indexed_logs_usage_sum",
        type: "number",
        format: "int64",
    },
    logsLiveIndexedLogsUsageSum: {
        baseName: "logs_live_indexed_logs_usage_sum",
        type: "number",
        format: "int64",
    },
    logsRehydratedIndexedLogsUsageSum: {
        baseName: "logs_rehydrated_indexed_logs_usage_sum",
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
//# sourceMappingURL=LogsRetentionSumUsage.js.map