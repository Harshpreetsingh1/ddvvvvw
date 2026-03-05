"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudConfigurationComplianceRuleOptions = void 0;
/**
 * Options for cloud_configuration rules.
 * Fields `resourceType` and `regoRule` are mandatory when managing custom `cloud_configuration` rules.
 */
class CloudConfigurationComplianceRuleOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudConfigurationComplianceRuleOptions.attributeTypeMap;
    }
}
exports.CloudConfigurationComplianceRuleOptions = CloudConfigurationComplianceRuleOptions;
/**
 * @ignore
 */
CloudConfigurationComplianceRuleOptions.attributeTypeMap = {
    complexRule: {
        baseName: "complexRule",
        type: "boolean",
    },
    regoRule: {
        baseName: "regoRule",
        type: "CloudConfigurationRegoRule",
    },
    resourceType: {
        baseName: "resourceType",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudConfigurationComplianceRuleOptions.js.map