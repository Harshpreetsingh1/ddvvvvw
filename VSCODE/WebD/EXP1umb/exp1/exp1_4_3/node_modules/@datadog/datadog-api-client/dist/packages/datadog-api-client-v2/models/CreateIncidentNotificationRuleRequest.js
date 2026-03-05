"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIncidentNotificationRuleRequest = void 0;
/**
 * Create request for a notification rule.
 */
class CreateIncidentNotificationRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateIncidentNotificationRuleRequest.attributeTypeMap;
    }
}
exports.CreateIncidentNotificationRuleRequest = CreateIncidentNotificationRuleRequest;
/**
 * @ignore
 */
CreateIncidentNotificationRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentNotificationRuleCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateIncidentNotificationRuleRequest.js.map