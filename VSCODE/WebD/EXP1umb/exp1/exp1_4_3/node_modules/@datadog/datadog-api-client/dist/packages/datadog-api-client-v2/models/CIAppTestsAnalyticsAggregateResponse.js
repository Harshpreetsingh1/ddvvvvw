"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestsAnalyticsAggregateResponse = void 0;
/**
 * The response object for the test events aggregate API endpoint.
 */
class CIAppTestsAnalyticsAggregateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestsAnalyticsAggregateResponse.attributeTypeMap;
    }
}
exports.CIAppTestsAnalyticsAggregateResponse = CIAppTestsAnalyticsAggregateResponse;
/**
 * @ignore
 */
CIAppTestsAnalyticsAggregateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CIAppTestsAggregationBucketsResponse",
    },
    links: {
        baseName: "links",
        type: "CIAppResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "CIAppResponseMetadataWithPagination",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppTestsAnalyticsAggregateResponse.js.map