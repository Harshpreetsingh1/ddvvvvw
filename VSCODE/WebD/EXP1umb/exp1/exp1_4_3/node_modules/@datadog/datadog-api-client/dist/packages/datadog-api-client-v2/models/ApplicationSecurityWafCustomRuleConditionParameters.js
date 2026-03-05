"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleConditionParameters = void 0;
/**
 * The scope of the WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleConditionParameters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleConditionParameters.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleConditionParameters = ApplicationSecurityWafCustomRuleConditionParameters;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleConditionParameters.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "string",
    },
    inputs: {
        baseName: "inputs",
        type: "Array<ApplicationSecurityWafCustomRuleConditionInput>",
        required: true,
    },
    list: {
        baseName: "list",
        type: "Array<string>",
    },
    options: {
        baseName: "options",
        type: "ApplicationSecurityWafCustomRuleConditionOptions",
    },
    regex: {
        baseName: "regex",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleConditionParameters.js.map