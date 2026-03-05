"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationRuleParameters = void 0;
/**
 * Body of the notification rule create request.
 */
class CreateNotificationRuleParameters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateNotificationRuleParameters.attributeTypeMap;
    }
}
exports.CreateNotificationRuleParameters = CreateNotificationRuleParameters;
/**
 * @ignore
 */
CreateNotificationRuleParameters.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateNotificationRuleParametersData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateNotificationRuleParameters.js.map