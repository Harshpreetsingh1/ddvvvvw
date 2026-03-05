"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOnCallNotificationRuleRequestData = void 0;
/**
 * Data for creating an on-call notification rule
 */
class CreateOnCallNotificationRuleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateOnCallNotificationRuleRequestData.attributeTypeMap;
    }
}
exports.CreateOnCallNotificationRuleRequestData = CreateOnCallNotificationRuleRequestData;
/**
 * @ignore
 */
CreateOnCallNotificationRuleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OnCallNotificationRuleRequestAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "OnCallNotificationRuleRelationships",
    },
    type: {
        baseName: "type",
        type: "OnCallNotificationRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateOnCallNotificationRuleRequestData.js.map