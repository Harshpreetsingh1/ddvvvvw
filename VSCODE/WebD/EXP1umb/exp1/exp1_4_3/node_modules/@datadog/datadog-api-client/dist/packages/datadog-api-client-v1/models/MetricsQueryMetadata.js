"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsQueryMetadata = void 0;
/**
 * Object containing all metric names returned and their associated metadata.
 */
class MetricsQueryMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsQueryMetadata.attributeTypeMap;
    }
}
exports.MetricsQueryMetadata = MetricsQueryMetadata;
/**
 * @ignore
 */
MetricsQueryMetadata.attributeTypeMap = {
    aggr: {
        baseName: "aggr",
        type: "string",
    },
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    end: {
        baseName: "end",
        type: "number",
        format: "int64",
    },
    expression: {
        baseName: "expression",
        type: "string",
    },
    interval: {
        baseName: "interval",
        type: "number",
        format: "int64",
    },
    length: {
        baseName: "length",
        type: "number",
        format: "int64",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    pointlist: {
        baseName: "pointlist",
        type: "Array<[number, number]>",
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
    start: {
        baseName: "start",
        type: "number",
        format: "int64",
    },
    tagSet: {
        baseName: "tag_set",
        type: "Array<string>",
    },
    unit: {
        baseName: "unit",
        type: "[MetricsQueryUnit, MetricsQueryUnit]",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsQueryMetadata.js.map