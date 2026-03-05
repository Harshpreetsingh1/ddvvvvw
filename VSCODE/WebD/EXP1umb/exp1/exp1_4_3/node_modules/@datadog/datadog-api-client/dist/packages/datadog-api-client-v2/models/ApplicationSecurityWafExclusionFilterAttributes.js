"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterAttributes = void 0;
/**
 * Attributes describing a WAF exclusion filter.
 */
class ApplicationSecurityWafExclusionFilterAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterAttributes.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterAttributes = ApplicationSecurityWafExclusionFilterAttributes;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    eventQuery: {
        baseName: "event_query",
        type: "string",
    },
    ipList: {
        baseName: "ip_list",
        type: "Array<string>",
    },
    metadata: {
        baseName: "metadata",
        type: "ApplicationSecurityWafExclusionFilterMetadata",
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
    searchQuery: {
        baseName: "search_query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterAttributes.js.map