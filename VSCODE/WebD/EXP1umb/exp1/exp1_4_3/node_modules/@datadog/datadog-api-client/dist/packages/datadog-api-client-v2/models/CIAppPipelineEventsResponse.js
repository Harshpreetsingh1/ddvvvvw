"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppPipelineEventsResponse = void 0;
/**
 * Response object with all pipeline events matching the request and pagination information.
 */
class CIAppPipelineEventsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppPipelineEventsResponse.attributeTypeMap;
    }
}
exports.CIAppPipelineEventsResponse = CIAppPipelineEventsResponse;
/**
 * @ignore
 */
CIAppPipelineEventsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CIAppPipelineEvent>",
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
//# sourceMappingURL=CIAppPipelineEventsResponse.js.map