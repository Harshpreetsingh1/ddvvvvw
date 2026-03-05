"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleUpdateRequest = void 0;
/**
 * Request object that includes the Custom Rule to update.
 */
class ApplicationSecurityWafCustomRuleUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleUpdateRequest.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleUpdateRequest = ApplicationSecurityWafCustomRuleUpdateRequest;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationSecurityWafCustomRuleUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleUpdateRequest.js.map