"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleScope = void 0;
/**
 * The scope of the WAF custom rule.
 */
class ApplicationSecurityWafCustomRuleScope {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleScope.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleScope = ApplicationSecurityWafCustomRuleScope;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleScope.attributeTypeMap = {
    env: {
        baseName: "env",
        type: "string",
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleScope.js.map