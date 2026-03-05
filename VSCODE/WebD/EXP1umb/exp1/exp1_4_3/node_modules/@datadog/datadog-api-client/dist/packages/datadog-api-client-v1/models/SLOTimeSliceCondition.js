"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOTimeSliceCondition = void 0;
/**
 * The time-slice condition, composed of 3 parts: 1. the metric timeseries query, 2. the comparator,
 * and 3. the threshold. Optionally, a fourth part, the query interval, can be provided.
 */
class SLOTimeSliceCondition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOTimeSliceCondition.attributeTypeMap;
    }
}
exports.SLOTimeSliceCondition = SLOTimeSliceCondition;
/**
 * @ignore
 */
SLOTimeSliceCondition.attributeTypeMap = {
    comparator: {
        baseName: "comparator",
        type: "SLOTimeSliceComparator",
        required: true,
    },
    query: {
        baseName: "query",
        type: "SLOTimeSliceQuery",
        required: true,
    },
    queryIntervalSeconds: {
        baseName: "query_interval_seconds",
        type: "SLOTimeSliceInterval",
    },
    threshold: {
        baseName: "threshold",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOTimeSliceCondition.js.map