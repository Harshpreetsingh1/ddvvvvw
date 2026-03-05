"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleTags = void 0;
/**
 * Tags associated with the WAF Custom Rule. The concatenation of category and type will form the security
 * activity field associated with the traces.
 */
class ApplicationSecurityWafCustomRuleTags {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleTags.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleTags = ApplicationSecurityWafCustomRuleTags;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleTags.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "ApplicationSecurityWafCustomRuleTagsCategory",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: string; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleTags.js.map