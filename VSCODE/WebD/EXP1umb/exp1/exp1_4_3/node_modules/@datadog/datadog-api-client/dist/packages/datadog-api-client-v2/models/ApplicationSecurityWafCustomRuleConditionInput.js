"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleConditionInput = void 0;
/**
 * Input from the request on which the condition should apply.
 */
class ApplicationSecurityWafCustomRuleConditionInput {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleConditionInput.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleConditionInput = ApplicationSecurityWafCustomRuleConditionInput;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleConditionInput.attributeTypeMap = {
    address: {
        baseName: "address",
        type: "ApplicationSecurityWafCustomRuleConditionInputAddress",
        required: true,
    },
    keyPath: {
        baseName: "key_path",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleConditionInput.js.map