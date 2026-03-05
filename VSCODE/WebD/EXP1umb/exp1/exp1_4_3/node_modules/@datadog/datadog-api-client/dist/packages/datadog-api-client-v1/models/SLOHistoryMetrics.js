"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOHistoryMetrics = void 0;
/**
 * A `metric` based SLO history response.
 *
 * This is not included in responses for `monitor` based SLOs.
 */
class SLOHistoryMetrics {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOHistoryMetrics.attributeTypeMap;
    }
}
exports.SLOHistoryMetrics = SLOHistoryMetrics;
/**
 * @ignore
 */
SLOHistoryMetrics.attributeTypeMap = {
    denominator: {
        baseName: "denominator",
        type: "SLOHistoryMetricsSeries",
        required: true,
    },
    interval: {
        baseName: "interval",
        type: "number",
        required: true,
        format: "int64",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    numerator: {
        baseName: "numerator",
        type: "SLOHistoryMetricsSeries",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    resType: {
        baseName: "res_type",
        type: "string",
        required: true,
    },
    respVersion: {
        baseName: "resp_version",
        type: "number",
        required: true,
        format: "int64",
    },
    times: {
        baseName: "times",
        type: "Array<number>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOHistoryMetrics.js.map