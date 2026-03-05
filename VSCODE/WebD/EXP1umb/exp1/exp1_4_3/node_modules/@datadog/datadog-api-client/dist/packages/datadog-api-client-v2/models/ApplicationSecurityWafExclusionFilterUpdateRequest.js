"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterUpdateRequest = void 0;
/**
 * Request object for updating a single WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterUpdateRequest.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterUpdateRequest = ApplicationSecurityWafExclusionFilterUpdateRequest;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationSecurityWafExclusionFilterUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterUpdateRequest.js.map