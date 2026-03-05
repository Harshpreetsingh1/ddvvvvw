"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFiltersResponse = void 0;
/**
 * Response object for multiple WAF exclusion filters.
 */
class ApplicationSecurityWafExclusionFiltersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFiltersResponse.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFiltersResponse = ApplicationSecurityWafExclusionFiltersResponse;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFiltersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ApplicationSecurityWafExclusionFilterResource>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFiltersResponse.js.map