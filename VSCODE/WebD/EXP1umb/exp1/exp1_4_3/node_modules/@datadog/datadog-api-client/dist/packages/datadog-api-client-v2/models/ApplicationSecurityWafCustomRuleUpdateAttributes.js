"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleUpdateAttributes = void 0;
/**
 * Update a WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleUpdateAttributes.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleUpdateAttributes = ApplicationSecurityWafCustomRuleUpdateAttributes;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleUpdateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=ApplicationSecurityWafCustomRuleUpdateAttributes.js.map