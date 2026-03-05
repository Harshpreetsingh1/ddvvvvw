"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleData = void 0;
/**
 * Object for a single WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleData.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleData = ApplicationSecurityWafCustomRuleData;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationSecurityWafCustomRuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ApplicationSecurityWafCustomRuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleData.js.map