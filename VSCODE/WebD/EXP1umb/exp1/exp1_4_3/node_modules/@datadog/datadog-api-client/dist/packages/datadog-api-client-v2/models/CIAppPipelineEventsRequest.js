"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventsRequest = void 0;
/**
 * The request for a pipelines search.
 */
class CIAppPipelineEventsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventsRequest.attributeTypeMap;
    }
}
exports.CIAppPipelineEventsRequest = CIAppPipelineEventsRequest;
/**
 * @ignore
 */
CIAppPipelineEventsRequest.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "CIAppPipelinesQueryFilter",
    },
    options: {
        baseName: "options",
        type: "CIAppQueryOptions",
    },
    page: {
        baseName: "page",
        type: "CIAppQueryPageOptions",
    },
    sort: {
        baseName: "sort",
        type: "CIAppSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CIAppPipelineEventsRequest.js.map