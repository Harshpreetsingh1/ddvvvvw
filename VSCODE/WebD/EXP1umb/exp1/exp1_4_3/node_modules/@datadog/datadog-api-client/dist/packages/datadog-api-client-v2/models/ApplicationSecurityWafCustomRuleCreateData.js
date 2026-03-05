"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleCreateData = void 0;
/**
 * Object for a single WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleCreateData.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleCreateData = ApplicationSecurityWafCustomRuleCreateData;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationSecurityWafCustomRuleCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ApplicationSecurityWafCustomRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleCreateData.js.map