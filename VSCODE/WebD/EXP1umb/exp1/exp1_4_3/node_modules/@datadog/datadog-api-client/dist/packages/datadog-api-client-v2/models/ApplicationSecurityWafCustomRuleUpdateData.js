"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleUpdateData = void 0;
/**
 * Object for a single WAF Custom Rule.
 */
class ApplicationSecurityWafCustomRuleUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleUpdateData.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleUpdateData = ApplicationSecurityWafCustomRuleUpdateData;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ApplicationSecurityWafCustomRuleUpdateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ApplicationSecurityWafCustomRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleUpdateData.js.map