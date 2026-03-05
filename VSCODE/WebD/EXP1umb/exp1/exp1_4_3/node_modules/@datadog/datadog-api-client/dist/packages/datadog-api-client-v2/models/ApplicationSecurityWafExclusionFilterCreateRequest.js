"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterCreateRequest = void 0;
/**
 * Request object for creating a single WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterCreateRequest.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterCreateRequest = ApplicationSecurityWafExclusionFilterCreateRequest;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationSecurityWafExclusionFilterCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterCreateRequest.js.map