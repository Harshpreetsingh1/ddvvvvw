"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelinesGroupBy = void 0;
/**
 * A group-by rule.
 */
class CIAppPipelinesGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelinesGroupBy.attributeTypeMap;
    }
}
exports.CIAppPipelinesGroupBy = CIAppPipelinesGroupBy;
/**
 * @ignore
 */
CIAppPipelinesGroupBy.attributeTypeMap = {
    facet: {
        baseName: "facet",
        type: "string",
        required: true,
    },
    histogram: {
        baseName: "histogram",
        type: "CIAppGroupByHistogram",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
    missing: {
        baseName: "missing",
        type: "CIAppGroupByMissing",
    },
    sort: {
        baseName: "sort",
        type: "CIAppAggregateSort",
    },
    total: {
        baseName: "total",
        type: "CIAppGroupByTotal",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelinesGroupBy.js.map