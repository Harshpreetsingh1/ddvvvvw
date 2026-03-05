"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterResponse = void 0;
/**
 * Response object for a single WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterResponse.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterResponse = ApplicationSecurityWafExclusionFilterResponse;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationSecurityWafExclusionFilterResource",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterResponse.js.map