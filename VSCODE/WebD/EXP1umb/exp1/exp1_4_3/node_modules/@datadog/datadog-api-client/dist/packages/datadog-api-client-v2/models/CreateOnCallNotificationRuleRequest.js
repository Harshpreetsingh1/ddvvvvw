"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnCallNotificationRuleRequest = void 0;
/**
 * A top-level wrapper for creating a notification rule for a user
 */
class CreateOnCallNotificationRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateOnCallNotificationRuleRequest.attributeTypeMap;
    }
}
exports.CreateOnCallNotificationRuleRequest = CreateOnCallNotificationRuleRequest;
/**
 * @ignore
 */
CreateOnCallNotificationRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateOnCallNotificationRuleRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateOnCallNotificationRuleRequest.js.map