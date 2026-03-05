"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleConditionOptions = void 0;
/**
 * Options for the operator of this condition.
 */
class ApplicationSecurityWafCustomRuleConditionOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleConditionOptions.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleConditionOptions = ApplicationSecurityWafCustomRuleConditionOptions;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleConditionOptions.attributeTypeMap = {
    caseSensitive: {
        baseName: "case_sensitive",
        type: "boolean",
    },
    minLength: {
        baseName: "min_length",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleConditionOptions.js.map