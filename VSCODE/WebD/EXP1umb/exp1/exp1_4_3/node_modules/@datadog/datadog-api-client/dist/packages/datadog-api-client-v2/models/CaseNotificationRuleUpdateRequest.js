"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleUpdateRequest = void 0;
/**
 * Notification rule update request
 */
class CaseNotificationRuleUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleUpdateRequest.attributeTypeMap;
    }
}
exports.CaseNotificationRuleUpdateRequest = CaseNotificationRuleUpdateRequest;
/**
 * @ignore
 */
CaseNotificationRuleUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseNotificationRuleUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleUpdateRequest.js.map