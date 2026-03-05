"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleResponse = void 0;
/**
 * Response object that includes a single WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleResponse.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleResponse = ApplicationSecurityWafCustomRuleResponse;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ApplicationSecurityWafCustomRuleData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleResponse.js.map