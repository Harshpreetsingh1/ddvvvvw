"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleRecipient = void 0;
/**
 * Notification rule recipient
 */
class CaseNotificationRuleRecipient {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleRecipient.attributeTypeMap;
    }
}
exports.CaseNotificationRuleRecipient = CaseNotificationRuleRecipient;
/**
 * @ignore
 */
CaseNotificationRuleRecipient.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseNotificationRuleRecipientData",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleRecipient.js.map