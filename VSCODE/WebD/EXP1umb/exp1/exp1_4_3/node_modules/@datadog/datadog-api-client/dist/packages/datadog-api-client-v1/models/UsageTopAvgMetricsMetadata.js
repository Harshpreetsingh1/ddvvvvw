"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsageTopAvgMetricsMetadata = void 0;
/**
 * The object containing document metadata.
 */
class UsageTopAvgMetricsMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsageTopAvgMetricsMetadata.attributeTypeMap;
    }
}
exports.UsageTopAvgMetricsMetadata = UsageTopAvgMetricsMetadata;
/**
 * @ignore
 */
UsageTopAvgMetricsMetadata.attributeTypeMap = {
    day: {
        baseName: "day",
        type: "Date",
        format: "date-time",
    },
    month: {
        baseName: "month",
        type: "Date",
        format: "date-time",
    },
    pagination: {
        baseName: "pagination",
        type: "UsageTopAvgMetricsPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsageTopAvgMetricsMetadata.js.map