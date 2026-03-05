"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsQueryResponse = void 0;
/**
 * Response Object that includes your query and the list of metrics retrieved.
 */
class MetricsQueryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsQueryResponse.attributeTypeMap;
    }
}
exports.MetricsQueryResponse = MetricsQueryResponse;
/**
 * @ignore
 */
MetricsQueryResponse.attributeTypeMap = {
    error: {
        baseName: "error",
        type: "string",
    },
    fromDate: {
        baseName: "from_date",
        type: "number",
        format: "int64",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<string>",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    resType: {
        baseName: "res_type",
        type: "string",
    },
    series: {
        baseName: "series",
        type: "Array<MetricsQueryMetadata>",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    toDate: {
        baseName: "to_date",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsQueryResponse.js.map