"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleCreateRequest = void 0;
/**
 * Request object that includes the custom rule to create.
 */
class ApplicationSecurityWafCustomRuleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleCreateRequest.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleCreateRequest = ApplicationSecurityWafCustomRuleCreateRequest;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationSecurityWafCustomRuleCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleCreateRequest.js.map