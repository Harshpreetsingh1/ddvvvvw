"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterRulesTarget = void 0;
/**
 * Target WAF rules based either on an identifier or tags.
 */
class ApplicationSecurityWafExclusionFilterRulesTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterRulesTarget.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterRulesTarget = ApplicationSecurityWafExclusionFilterRulesTarget;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterRulesTarget.attributeTypeMap = {
    ruleId: {
        baseName: "rule_id",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "ApplicationSecurityWafExclusionFilterRulesTargetTags",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterRulesTarget.js.map