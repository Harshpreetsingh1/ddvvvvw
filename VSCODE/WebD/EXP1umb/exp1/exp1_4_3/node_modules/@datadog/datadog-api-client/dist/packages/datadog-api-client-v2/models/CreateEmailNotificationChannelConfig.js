"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmailNotificationChannelConfig = void 0;
/**
 * Configuration to create an e-mail notification channel
 */
class CreateEmailNotificationChannelConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateEmailNotificationChannelConfig.attributeTypeMap;
    }
}
exports.CreateEmailNotificationChannelConfig = CreateEmailNotificationChannelConfig;
/**
 * @ignore
 */
CreateEmailNotificationChannelConfig.attributeTypeMap = {
    address: {
        baseName: "address",
        type: "string",
        required: true,
    },
    formats: {
        baseName: "formats",
        type: "Array<NotificationChannelEmailFormatType>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotificationChannelEmailConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateEmailNotificationChannelConfig.js.map