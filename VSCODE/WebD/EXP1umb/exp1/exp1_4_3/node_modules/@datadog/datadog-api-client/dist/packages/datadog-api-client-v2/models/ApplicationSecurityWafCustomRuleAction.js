"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleAction = void 0;
/**
 * The definition of `ApplicationSecurityWafCustomRuleAction` object.
 */
class ApplicationSecurityWafCustomRuleAction {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleAction.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleAction = ApplicationSecurityWafCustomRuleAction;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleAction.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "ApplicationSecurityWafCustomRuleActionAction",
    },
    parameters: {
        baseName: "parameters",
        type: "ApplicationSecurityWafCustomRuleActionParameters",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleAction.js.map