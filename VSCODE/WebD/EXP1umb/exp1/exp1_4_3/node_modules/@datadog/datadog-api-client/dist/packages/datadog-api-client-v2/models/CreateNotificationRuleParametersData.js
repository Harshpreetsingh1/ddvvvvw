"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationRuleParametersData = void 0;
/**
 * Data of the notification rule create request: the rule type, and the rule attributes. All fields are required.
 */
class CreateNotificationRuleParametersData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateNotificationRuleParametersData.attributeTypeMap;
    }
}
exports.CreateNotificationRuleParametersData = CreateNotificationRuleParametersData;
/**
 * @ignore
 */
CreateNotificationRuleParametersData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateNotificationRuleParametersDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotificationRulesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateNotificationRuleParametersData.js.map