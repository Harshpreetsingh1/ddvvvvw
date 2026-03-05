"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestsAggregationBucketsResponse = void 0;
/**
 * The query results.
 */
class CIAppTestsAggregationBucketsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestsAggregationBucketsResponse.attributeTypeMap;
    }
}
exports.CIAppTestsAggregationBucketsResponse = CIAppTestsAggregationBucketsResponse;
/**
 * @ignore
 */
CIAppTestsAggregationBucketsResponse.attributeTypeMap = {
    buckets: {
        baseName: "buckets",
        type: "Array<CIAppTestsBucketResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppTestsAggregationBucketsResponse.js.map