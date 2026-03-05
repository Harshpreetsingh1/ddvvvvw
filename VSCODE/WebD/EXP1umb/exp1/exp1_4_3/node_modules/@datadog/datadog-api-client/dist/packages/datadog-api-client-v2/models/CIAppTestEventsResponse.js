"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestEventsResponse = void 0;
/**
 * Response object with all test events matching the request and pagination information.
 */
class CIAppTestEventsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestEventsResponse.attributeTypeMap;
    }
}
exports.CIAppTestEventsResponse = CIAppTestEventsResponse;
/**
 * @ignore
 */
CIAppTestEventsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CIAppTestEvent>",
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
//# sourceMappingURL=CIAppTestEventsResponse.js.map