"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsIndex = void 0;
/**
 * Object describing a Datadog Log index.
 */
class LogsIndex {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsIndex.attributeTypeMap;
    }
}
exports.LogsIndex = LogsIndex;
/**
 * @ignore
 */
LogsIndex.attributeTypeMap = {
    dailyLimit: {
        baseName: "daily_limit",
        type: "number",
        format: "int64",
    },
    dailyLimitReset: {
        baseName: "daily_limit_reset",
        type: "LogsDailyLimitReset",
    },
    dailyLimitWarningThresholdPercentage: {
        baseName: "daily_limit_warning_threshold_percentage",
        type: "number",
        format: "double",
    },
    exclusionFilters: {
        baseName: "exclusion_filters",
        type: "Array<LogsExclusion>",
    },
    filter: {
        baseName: "filter",
        type: "LogsFilter",
        required: true,
    },
    isRateLimited: {
        baseName: "is_rate_limited",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    numFlexLogsRetentionDays: {
        baseName: "num_flex_logs_retention_days",
        type: "number",
        format: "int64",
    },
    numRetentionDays: {
        baseName: "num_retention_days",
        type: "number",
        format: "int64",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsIndex.js.map