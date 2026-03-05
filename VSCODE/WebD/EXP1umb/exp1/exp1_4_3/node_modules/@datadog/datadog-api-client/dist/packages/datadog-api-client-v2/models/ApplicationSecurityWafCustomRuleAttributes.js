"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleAttributes = void 0;
/**
 * A WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleAttributes.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleAttributes = ApplicationSecurityWafCustomRuleAttributes;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleAttributes.attributeTypeMap = {
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
    metadata: {
        baseName: "metadata",
        type: "ApplicationSecurityWafCustomRuleMetadata",
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
//# sourceMappingURL=ApplicationSecurityWafCustomRuleAttributes.js.map