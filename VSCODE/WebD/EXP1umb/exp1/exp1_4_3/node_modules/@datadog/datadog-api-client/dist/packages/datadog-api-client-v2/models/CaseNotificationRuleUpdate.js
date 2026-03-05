"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleUpdate = void 0;
/**
 * Notification rule update
 */
class CaseNotificationRuleUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleUpdate.attributeTypeMap;
    }
}
exports.CaseNotificationRuleUpdate = CaseNotificationRuleUpdate;
/**
 * @ignore
 */
CaseNotificationRuleUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseNotificationRuleAttributes",
    },
    type: {
        baseName: "type",
        type: "CaseNotificationRuleResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleUpdate.js.map