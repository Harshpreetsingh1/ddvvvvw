"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelinesAnalyticsAggregateResponse = void 0;
/**
 * The response object for the pipeline events aggregate API endpoint.
 */
class CIAppPipelinesAnalyticsAggregateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelinesAnalyticsAggregateResponse.attributeTypeMap;
    }
}
exports.CIAppPipelinesAnalyticsAggregateResponse = CIAppPipelinesAnalyticsAggregateResponse;
/**
 * @ignore
 */
CIAppPipelinesAnalyticsAggregateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CIAppPipelinesAggregationBucketsResponse",
    },
    links: {
        baseName: "links",
        type: "CIAppResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "CIAppResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelinesAnalyticsAggregateResponse.js.map