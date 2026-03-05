"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleCreateAttributes = void 0;
/**
 * Notification rule creation attributes
 */
class CaseNotificationRuleCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleCreateAttributes.attributeTypeMap;
    }
}
exports.CaseNotificationRuleCreateAttributes = CaseNotificationRuleCreateAttributes;
/**
 * @ignore
 */
CaseNotificationRuleCreateAttributes.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    recipients: {
        baseName: "recipients",
        type: "Array<CaseNotificationRuleRecipient>",
        required: true,
    },
    triggers: {
        baseName: "triggers",
        type: "Array<CaseNotificationRuleTrigger>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleCreateAttributes.js.map