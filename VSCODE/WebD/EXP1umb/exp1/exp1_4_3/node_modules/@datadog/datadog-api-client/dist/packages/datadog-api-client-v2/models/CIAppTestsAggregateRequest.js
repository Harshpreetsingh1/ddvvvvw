"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestsAggregateRequest = void 0;
/**
 * The object sent with the request to retrieve aggregation buckets of test events from your organization.
 */
class CIAppTestsAggregateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestsAggregateRequest.attributeTypeMap;
    }
}
exports.CIAppTestsAggregateRequest = CIAppTestsAggregateRequest;
/**
 * @ignore
 */
CIAppTestsAggregateRequest.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "Array<CIAppCompute>",
    },
    filter: {
        baseName: "filter",
        type: "CIAppTestsQueryFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<CIAppTestsGroupBy>",
    },
    options: {
        baseName: "options",
        type: "CIAppQueryOptions",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppTestsAggregateRequest.js.map