"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestsGroupBy = void 0;
/**
 * A group-by rule.
 */
class CIAppTestsGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestsGroupBy.attributeTypeMap;
    }
}
exports.CIAppTestsGroupBy = CIAppTestsGroupBy;
/**
 * @ignore
 */
CIAppTestsGroupBy.attributeTypeMap = {
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
//# sourceMappingURL=CIAppTestsGroupBy.js.map