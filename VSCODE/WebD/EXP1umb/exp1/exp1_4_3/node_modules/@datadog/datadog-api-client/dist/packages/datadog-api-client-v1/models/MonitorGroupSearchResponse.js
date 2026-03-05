"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorGroupSearchResponse = void 0;
/**
 * The response of a monitor group search.
 */
class MonitorGroupSearchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorGroupSearchResponse.attributeTypeMap;
    }
}
exports.MonitorGroupSearchResponse = MonitorGroupSearchResponse;
/**
 * @ignore
 */
MonitorGroupSearchResponse.attributeTypeMap = {
    counts: {
        baseName: "counts",
        type: "MonitorGroupSearchResponseCounts",
    },
    groups: {
        baseName: "groups",
        type: "Array<MonitorGroupSearchResult>",
    },
    metadata: {
        baseName: "metadata",
        type: "MonitorSearchResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorGroupSearchResponse.js.map