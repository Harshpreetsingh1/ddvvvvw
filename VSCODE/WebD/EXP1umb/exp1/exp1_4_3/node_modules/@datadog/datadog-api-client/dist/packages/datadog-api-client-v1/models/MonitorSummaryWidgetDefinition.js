"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSummaryWidgetDefinition = void 0;
/**
 * The monitor summary widget displays a summary view of all your Datadog monitors, or a subset based on a query. Only available on FREE layout dashboards.
 */
class MonitorSummaryWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorSummaryWidgetDefinition.attributeTypeMap;
    }
}
exports.MonitorSummaryWidgetDefinition = MonitorSummaryWidgetDefinition;
/**
 * @ignore
 */
MonitorSummaryWidgetDefinition.attributeTypeMap = {
    colorPreference: {
        baseName: "color_preference",
        type: "WidgetColorPreference",
    },
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    displayFormat: {
        baseName: "display_format",
        type: "WidgetMonitorSummaryDisplayFormat",
    },
    hideZeroCounts: {
        baseName: "hide_zero_counts",
        type: "boolean",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    showLastTriggered: {
        baseName: "show_last_triggered",
        type: "boolean",
    },
    showPriority: {
        baseName: "show_priority",
        type: "boolean",
    },
    sort: {
        baseName: "sort",
        type: "WidgetMonitorSummarySort",
    },
    start: {
        baseName: "start",
        type: "number",
        format: "int64",
    },
    summaryType: {
        baseName: "summary_type",
        type: "WidgetSummaryType",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    titleAlign: {
        baseName: "title_align",
        type: "WidgetTextAlign",
    },
    titleSize: {
        baseName: "title_size",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MonitorSummaryWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorSummaryWidgetDefinition.js.map