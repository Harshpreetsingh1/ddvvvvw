"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageTopAvgMetricsHour = void 0;
/**
 * Number of hourly recorded custom metrics for a given organization.
 */
class UsageTopAvgMetricsHour {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageTopAvgMetricsHour.attributeTypeMap;
    }
}
exports.UsageTopAvgMetricsHour = UsageTopAvgMetricsHour;
/**
 * @ignore
 */
UsageTopAvgMetricsHour.attributeTypeMap = {
    avgMetricHour: {
        baseName: "avg_metric_hour",
        type: "number",
        format: "int64",
    },
    maxMetricHour: {
        baseName: "max_metric_hour",
        type: "number",
        format: "int64",
    },
    metricCategory: {
        baseName: "metric_category",
        type: "UsageMetricCategory",
    },
    metricName: {
        baseName: "metric_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageTopAvgMetricsHour.js.map