"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafExclusionFilterRulesTargetTags = void 0;
/**
 * Target multiple WAF rules based on their tags.
 */
class ApplicationSecurityWafExclusionFilterRulesTargetTags {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafExclusionFilterRulesTargetTags.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafExclusionFilterRulesTargetTags = ApplicationSecurityWafExclusionFilterRulesTargetTags;
/**
 * @ignore
 */
ApplicationSecurityWafExclusionFilterRulesTargetTags.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: string; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafExclusionFilterRulesTargetTags.js.map