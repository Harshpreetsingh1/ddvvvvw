"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSecurityWafCustomRuleActionParameters = void 0;
/**
 * The definition of `ApplicationSecurityWafCustomRuleActionParameters` object.
 */
class ApplicationSecurityWafCustomRuleActionParameters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApplicationSecurityWafCustomRuleActionParameters.attributeTypeMap;
    }
}
exports.ApplicationSecurityWafCustomRuleActionParameters = ApplicationSecurityWafCustomRuleActionParameters;
/**
 * @ignore
 */
ApplicationSecurityWafCustomRuleActionParameters.attributeTypeMap = {
    location: {
        baseName: "location",
        type: "string",
    },
    statusCode: {
        baseName: "status_code",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApplicationSecurityWafCustomRuleActionParameters.js.map