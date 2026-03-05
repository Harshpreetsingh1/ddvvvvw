"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CIAppTestEventsRequest = void 0;
/**
 * The request for a tests search.
 */
class CIAppTestEventsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CIAppTestEventsRequest.attributeTypeMap;
    }
}
exports.CIAppTestEventsRequest = CIAppTestEventsRequest;
/**
 * @ignore
 */
CIAppTestEventsRequest.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "CIAppTestsQueryFilter",
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
//# sourceMappingURL=CIAppTestEventsRequest.js.map