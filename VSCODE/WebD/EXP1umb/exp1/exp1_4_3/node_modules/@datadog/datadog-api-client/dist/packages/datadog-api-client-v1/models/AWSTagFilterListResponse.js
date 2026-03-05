"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSTagFilterListResponse = void 0;
/**
 * An array of tag filter rules by `namespace` and tag filter string.
 */
class AWSTagFilterListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSTagFilterListResponse.attributeTypeMap;
    }
}
exports.AWSTagFilterListResponse = AWSTagFilterListResponse;
/**
 * @ignore
 */
AWSTagFilterListResponse.attributeTypeMap = {
    filters: {
        baseName: "filters",
        type: "Array<AWSTagFilter>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSTagFilterListResponse.js.map