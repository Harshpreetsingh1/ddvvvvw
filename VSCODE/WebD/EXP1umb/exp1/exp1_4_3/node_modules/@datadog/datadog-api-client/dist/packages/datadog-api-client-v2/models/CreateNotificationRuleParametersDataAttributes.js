"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNotificationRuleParametersDataAttributes = void 0;
/**
 * Attributes of the notification rule create request.
 */
class CreateNotificationRuleParametersDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateNotificationRuleParametersDataAttributes.attributeTypeMap;
    }
}
exports.CreateNotificationRuleParametersDataAttributes = CreateNotificationRuleParametersDataAttributes;
/**
 * @ignore
 */
CreateNotificationRuleParametersDataAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    selectors: {
        baseName: "selectors",
        type: "Selectors",
        required: true,
    },
    targets: {
        baseName: "targets",
        type: "Array<string>",
        required: true,
    },
    timeAggregation: {
        baseName: "time_aggregation",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateNotificationRuleParametersDataAttributes.js.map