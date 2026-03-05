"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleListResponse = void 0;
/**
 * Response object that includes a list of WAF custom rules.
 */
class ApplicationSecurityWafCustomRuleListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleListResponse.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleListResponse = ApplicationSecurityWafCustomRuleListResponse;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ApplicationSecurityWafCustomRuleData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleListResponse.js.map