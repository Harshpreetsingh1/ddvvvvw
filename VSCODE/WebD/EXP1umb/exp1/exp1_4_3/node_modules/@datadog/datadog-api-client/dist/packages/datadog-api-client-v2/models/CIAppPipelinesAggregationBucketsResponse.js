"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelinesAggregationBucketsResponse = void 0;
/**
 * The query results.
 */
class CIAppPipelinesAggregationBucketsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelinesAggregationBucketsResponse.attributeTypeMap;
    }
}
exports.CIAppPipelinesAggregationBucketsResponse = CIAppPipelinesAggregationBucketsResponse;
/**
 * @ignore
 */
CIAppPipelinesAggregationBucketsResponse.attributeTypeMap = {
    buckets: {
        baseName: "buckets",
        type: "Array<CIAppPipelinesBucketResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelinesAggregationBucketsResponse.js.map