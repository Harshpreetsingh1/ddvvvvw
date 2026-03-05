"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationChannelAttributes = void 0;
/**
 * Attributes for creating an on-call notification channel.
 */
class CreateNotificationChannelAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateNotificationChannelAttributes.attributeTypeMap;
    }
}
exports.CreateNotificationChannelAttributes = CreateNotificationChannelAttributes;
/**
 * @ignore
 */
CreateNotificationChannelAttributes.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "CreateNotificationChannelConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateNotificationChannelAttributes.js.map