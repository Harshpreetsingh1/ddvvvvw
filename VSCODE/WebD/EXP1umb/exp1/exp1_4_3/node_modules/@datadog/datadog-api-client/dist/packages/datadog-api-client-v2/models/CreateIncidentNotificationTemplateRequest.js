"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIncidentNotificationTemplateRequest = void 0;
/**
 * Create request for a notification template.
 */
class CreateIncidentNotificationTemplateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateIncidentNotificationTemplateRequest.attributeTypeMap;
    }
}
exports.CreateIncidentNotificationTemplateRequest = CreateIncidentNotificationTemplateRequest;
/**
 * @ignore
 */
CreateIncidentNotificationTemplateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentNotificationTemplateCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateIncidentNotificationTemplateRequest.js.map