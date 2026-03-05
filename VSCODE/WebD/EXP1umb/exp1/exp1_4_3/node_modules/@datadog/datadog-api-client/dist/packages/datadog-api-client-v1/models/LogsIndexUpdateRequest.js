"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsIndexUpdateRequest = void 0;
/**
 * Object for updating a Datadog Log index.
 */
class LogsIndexUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsIndexUpdateRequest.attributeTypeMap;
    }
}
exports.LogsIndexUpdateRequest = LogsIndexUpdateRequest;
/**
 * @ignore
 */
LogsIndexUpdateRequest.attributeTypeMap = {
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
    disableDailyLimit: {
        baseName: "disable_daily_limit",
        type: "boolean",
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
//# sourceMappingURL=LogsIndexUpdateRequest.js.map