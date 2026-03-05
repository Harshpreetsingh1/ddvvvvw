"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryMetricsSeries = void 0;
/**
 * A representation of `metric` based SLO timeseries for the provided queries.
 * This is the same response type from `batch_query` endpoint.
 */
class SLOHistoryMetricsSeries {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryMetricsSeries.attributeTypeMap;
    }
}
exports.SLOHistoryMetricsSeries = SLOHistoryMetricsSeries;
/**
 * @ignore
 */
SLOHistoryMetricsSeries.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        required: true,
        format: "int64",
    },
    metadata: {
        baseName: "metadata",
        type: "SLOHistoryMetricsSeriesMetadata",
    },
    sum: {
        baseName: "sum",
        type: "number",
        required: true,
        format: "double",
    },
    values: {
        baseName: "values",
        type: "Array<number>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryMetricsSeries.js.map