"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudConfigurationRuleComplianceSignalOptions = void 0;
/**
 * How to generate compliance signals. Useful for cloud_configuration rules only.
 */
class CloudConfigurationRuleComplianceSignalOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudConfigurationRuleComplianceSignalOptions.attributeTypeMap;
    }
}
exports.CloudConfigurationRuleComplianceSignalOptions = CloudConfigurationRuleComplianceSignalOptions;
/**
 * @ignore
 */
CloudConfigurationRuleComplianceSignalOptions.attributeTypeMap = {
    defaultActivationStatus: {
        baseName: "defaultActivationStatus",
        type: "boolean",
    },
    defaultGroupByFields: {
        baseName: "defaultGroupByFields",
        type: "Array<string>",
    },
    userActivationStatus: {
        baseName: "userActivationStatus",
        type: "boolean",
    },
    userGroupByFields: {
        baseName: "userGroupByFields",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudConfigurationRuleComplianceSignalOptions.js.map