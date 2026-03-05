"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryMetricsSeriesMetadata = void 0;
/**
 * Query metadata.
 */
class SLOHistoryMetricsSeriesMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryMetricsSeriesMetadata.attributeTypeMap;
    }
}
exports.SLOHistoryMetricsSeriesMetadata = SLOHistoryMetricsSeriesMetadata;
/**
 * @ignore
 */
SLOHistoryMetricsSeriesMetadata.attributeTypeMap = {
    aggr: {
        baseName: "aggr",
        type: "string",
    },
    expression: {
        baseName: "expression",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    queryIndex: {
        baseName: "query_index",
        type: "number",
        format: "int64",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    unit: {
        baseName: "unit",
        type: "Array<SLOHistoryMetricsSeriesMetadataUnit>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryMetricsSeriesMetadata.js.map