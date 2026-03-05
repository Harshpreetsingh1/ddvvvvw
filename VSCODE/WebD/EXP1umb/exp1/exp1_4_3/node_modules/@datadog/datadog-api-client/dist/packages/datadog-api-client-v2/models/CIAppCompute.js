"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppCompute = void 0;
/**
 * A compute rule to compute metrics or timeseries.
 */
class CIAppCompute {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppCompute.attributeTypeMap;
    }
}
exports.CIAppCompute = CIAppCompute;
/**
 * @ignore
 */
CIAppCompute.attributeTypeMap = {
    aggregation: {
        baseName: "aggregation",
        type: "CIAppAggregationFunction",
        required: true,
    },
    interval: {
        baseName: "interval",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CIAppComputeType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppCompute.js.map