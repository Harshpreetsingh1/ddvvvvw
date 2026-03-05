"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleAttributes = void 0;
/**
 * Notification rule attributes
 */
class CaseNotificationRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleAttributes.attributeTypeMap;
    }
}
exports.CaseNotificationRuleAttributes = CaseNotificationRuleAttributes;
/**
 * @ignore
 */
CaseNotificationRuleAttributes.attributeTypeMap = {
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
    },
    triggers: {
        baseName: "triggers",
        type: "Array<CaseNotificationRuleTrigger>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleAttributes.js.map