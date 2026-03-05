"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleCreateAttributes = void 0;
/**
 * Create a new WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleCreateAttributes.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleCreateAttributes = ApplicationSecurityWafCustomRuleCreateAttributes;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleCreateAttributes.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "ApplicationSecurityWafCustomRuleAction",
    },
    blocking: {
        baseName: "blocking",
        type: "boolean",
        required: true,
    },
    conditions: {
        baseName: "conditions",
        type: "Array<ApplicationSecurityWafCustomRuleCondition>",
        required: true,
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    pathGlob: {
        baseName: "path_glob",
        type: "string",
    },
    scope: {
        baseName: "scope",
        type: "Array<ApplicationSecurityWafCustomRuleScope>",
    },
    tags: {
        baseName: "tags",
        type: "ApplicationSecurityWafCustomRuleTags",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleCreateAttributes.js.map