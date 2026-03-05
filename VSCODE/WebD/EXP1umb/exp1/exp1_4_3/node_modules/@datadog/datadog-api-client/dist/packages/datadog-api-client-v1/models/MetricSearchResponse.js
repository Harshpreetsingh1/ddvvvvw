"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricSearchResponse = void 0;
/**
 * Object containing the list of metrics matching the search query.
 */
class MetricSearchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricSearchResponse.attributeTypeMap;
    }
}
exports.MetricSearchResponse = MetricSearchResponse;
/**
 * @ignore
 */
MetricSearchResponse.attributeTypeMap = {
    results: {
        baseName: "results",
        type: "MetricSearchResponseResults",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricSearchResponse.js.map