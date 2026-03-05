"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleCreate = void 0;
/**
 * Notification rule create
 */
class CaseNotificationRuleCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleCreate.attributeTypeMap;
    }
}
exports.CaseNotificationRuleCreate = CaseNotificationRuleCreate;
/**
 * @ignore
 */
CaseNotificationRuleCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseNotificationRuleCreateAttributes",
        required: true,
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
//# sourceMappingURL=CaseNotificationRuleCreate.js.map