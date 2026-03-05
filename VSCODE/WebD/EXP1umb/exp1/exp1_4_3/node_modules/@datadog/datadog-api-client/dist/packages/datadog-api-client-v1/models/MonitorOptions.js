"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorOptions = void 0;
/**
 * List of options associated with your monitor.
 */
class MonitorOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorOptions.attributeTypeMap;
    }
}
exports.MonitorOptions = MonitorOptions;
/**
 * @ignore
 */
MonitorOptions.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "MonitorOptionsAggregation",
    },
    deviceIds: {
        baseName: "device_ids",
        type: "Array<MonitorDeviceID>",
    },
    enableLogsSample: {
        baseName: "enable_logs_sample",
        type: "boolean",
    },
    enableSamples: {
        baseName: "enable_samples",
        type: "boolean",
    },
    escalationMessage: {
        baseName: "escalation_message",
        type: "string",
    },
    evaluationDelay: {
        baseName: "evaluation_delay",
        type: "number",
        format: "int64",
    },
    groupRetentionDuration: {
        baseName: "group_retention_duration",
        type: "string",
    },
    groupbySimpleMonitor: {
        baseName: "groupby_simple_monitor",
        type: "boolean",
    },
    includeTags: {
        baseName: "include_tags",
        type: "boolean",
    },
    locked: {
        baseName: "locked",
        type: "boolean",
    },
    minFailureDuration: {
        baseName: "min_failure_duration",
        type: "number",
        format: "int64",
    },
    minLocationFailed: {
        baseName: "min_location_failed",
        type: "number",
        format: "int64",
    },
    newGroupDelay: {
        baseName: "new_group_delay",
        type: "number",
        format: "int64",
    },
    newHostDelay: {
        baseName: "new_host_delay",
        type: "number",
        format: "int64",
    },
    noDataTimeframe: {
        baseName: "no_data_timeframe",
        type: "number",
        format: "int64",
    },
    notificationPresetName: {
        baseName: "notification_preset_name",
        type: "MonitorOptionsNotificationPresets",
    },
    notifyAudit: {
        baseName: "notify_audit",
        type: "boolean",
    },
    notifyBy: {
        baseName: "notify_by",
        type: "Array<string>",
    },
    notifyNoData: {
        baseName: "notify_no_data",
        type: "boolean",
    },
    onMissingData: {
        baseName: "on_missing_data",
        type: "OnMissingDataOption",
    },
    renotifyInterval: {
        baseName: "renotify_interval",
        type: "number",
        format: "int64",
    },
    renotifyOccurrences: {
        baseName: "renotify_occurrences",
        type: "number",
        format: "int64",
    },
    renotifyStatuses: {
        baseName: "renotify_statuses",
        type: "Array<MonitorRenotifyStatusType>",
    },
    requireFullWindow: {
        baseName: "require_full_window",
        type: "boolean",
    },
    schedulingOptions: {
        baseName: "scheduling_options",
        type: "MonitorOptionsSchedulingOptions",
    },
    silenced: {
        baseName: "silenced",
        type: "{ [key: string]: number; }",
    },
    syntheticsCheckId: {
        baseName: "synthetics_check_id",
        type: "string",
    },
    thresholdWindows: {
        baseName: "threshold_windows",
        type: "MonitorThresholdWindowOptions",
    },
    thresholds: {
        baseName: "thresholds",
        type: "MonitorThresholds",
    },
    timeoutH: {
        baseName: "timeout_h",
        type: "number",
        format: "int64",
    },
    variables: {
        baseName: "variables",
        type: "Array<MonitorFormulaAndFunctionQueryDefinition>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorOptions.js.map