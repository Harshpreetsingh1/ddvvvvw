"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleCondition = void 0;
/**
 * One condition of the WAF Custom Rule.
 */
class ApplicationSecurityWafCustomRuleCondition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleCondition.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleCondition = ApplicationSecurityWafCustomRuleCondition;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleCondition.attributeTypeMap = {
    operator: {
        baseName: "operator",
        type: "ApplicationSecurityWafCustomRuleConditionOperator",
        required: true,
    },
    parameters: {
        baseName: "parameters",
        type: "ApplicationSecurityWafCustomRuleConditionParameters",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleCondition.js.map