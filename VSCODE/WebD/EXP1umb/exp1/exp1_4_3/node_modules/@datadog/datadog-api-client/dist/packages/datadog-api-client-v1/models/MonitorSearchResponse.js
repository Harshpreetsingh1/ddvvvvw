"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorSearchResponse = void 0;
/**
 * The response from a monitor search.
 */
class MonitorSearchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorSearchResponse.attributeTypeMap;
    }
}
exports.MonitorSearchResponse = MonitorSearchResponse;
/**
 * @ignore
 */
MonitorSearchResponse.attributeTypeMap = {
    counts: {
        baseName: "counts",
        type: "MonitorSearchResponseCounts",
    },
    metadata: {
        baseName: "metadata",
        type: "MonitorSearchResponseMetadata",
    },
    monitors: {
        baseName: "monitors",
        type: "Array<MonitorSearchResult>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorSearchResponse.js.map