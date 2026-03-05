"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseNotificationRule = void 0;
/**
 * A notification rule for case management
 */
class CaseNotificationRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CaseNotificationRule.attributeTypeMap;
    }
}
exports.CaseNotificationRule = CaseNotificationRule;
/**
 * @ignore
 */
CaseNotificationRule.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CaseNotificationRuleAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CaseNotificationRuleResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CaseNotificationRule.js.map