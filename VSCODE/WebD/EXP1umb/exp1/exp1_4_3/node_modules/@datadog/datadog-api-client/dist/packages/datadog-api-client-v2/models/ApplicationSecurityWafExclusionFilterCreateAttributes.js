"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterCreateAttributes = void 0;
/**
 * Attributes for creating a WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterCreateAttributes.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterCreateAttributes = ApplicationSecurityWafExclusionFilterCreateAttributes;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterCreateAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    ipList: {
        baseName: "ip_list",
        type: "Array<string>",
    },
    onMatch: {
        baseName: "on_match",
        type: "ApplicationSecurityWafExclusionFilterOnMatch",
    },
    parameters: {
        baseName: "parameters",
        type: "Array<string>",
    },
    pathGlob: {
        baseName: "path_glob",
        type: "string",
    },
    rulesTarget: {
        baseName: "rules_target",
        type: "Array<ApplicationSecurityWafExclusionFilterRulesTarget>",
    },
    scope: {
        baseName: "scope",
        type: "Array<ApplicationSecurityWafExclusionFilterScope>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterCreateAttributes.js.map