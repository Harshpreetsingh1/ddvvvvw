"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRuleCreateRequest = void 0;
/**
 * Notification rule create request
 */
class CaseNotificationRuleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRuleCreateRequest.attributeTypeMap;
    }
}
exports.CaseNotificationRuleCreateRequest = CaseNotificationRuleCreateRequest;
/**
 * @ignore
 */
CaseNotificationRuleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CaseNotificationRuleCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRuleCreateRequest.js.map