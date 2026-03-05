"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleTrigger = void 0;
/**
 * Notification rule trigger
 */
class CaseNotificationRuleTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleTrigger.attributeTypeMap;
    }
}
exports.CaseNotificationRuleTrigger = CaseNotificationRuleTrigger;
/**
 * @ignore
 */
CaseNotificationRuleTrigger.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseNotificationRuleTriggerData",
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
//# sourceMappingURL=CaseNotificationRuleTrigger.js.map