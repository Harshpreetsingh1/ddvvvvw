"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelinesAggregateRequest = void 0;
/**
 * The object sent with the request to retrieve aggregation buckets of pipeline events from your organization.
 */
class CIAppPipelinesAggregateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelinesAggregateRequest.attributeTypeMap;
    }
}
exports.CIAppPipelinesAggregateRequest = CIAppPipelinesAggregateRequest;
/**
 * @ignore
 */
CIAppPipelinesAggregateRequest.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "Array<CIAppCompute>",
    },
    filter: {
        baseName: "filter",
        type: "CIAppPipelinesQueryFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<CIAppPipelinesGroupBy>",
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
//# sourceMappingURL=CIAppPipelinesAggregateRequest.js.map