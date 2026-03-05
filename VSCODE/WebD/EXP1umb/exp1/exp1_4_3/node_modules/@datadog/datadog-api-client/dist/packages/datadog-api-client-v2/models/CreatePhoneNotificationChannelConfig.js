"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePhoneNotificationChannelConfig = void 0;
/**
 * Configuration to create a phone notification channel
 */
class CreatePhoneNotificationChannelConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreatePhoneNotificationChannelConfig.attributeTypeMap;
    }
}
exports.CreatePhoneNotificationChannelConfig = CreatePhoneNotificationChannelConfig;
/**
 * @ignore
 */
CreatePhoneNotificationChannelConfig.attributeTypeMap = {
    number: {
        baseName: "number",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotificationChannelPhoneConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreatePhoneNotificationChannelConfig.js.map