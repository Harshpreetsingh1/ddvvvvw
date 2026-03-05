"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationChannelData = void 0;
/**
 * Data for creating an on-call notification channel
 */
class CreateNotificationChannelData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateNotificationChannelData.attributeTypeMap;
    }
}
exports.CreateNotificationChannelData = CreateNotificationChannelData;
/**
 * @ignore
 */
CreateNotificationChannelData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateNotificationChannelAttributes",
    },
    type: {
        baseName: "type",
        type: "NotificationChannelType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateNotificationChannelData.js.map