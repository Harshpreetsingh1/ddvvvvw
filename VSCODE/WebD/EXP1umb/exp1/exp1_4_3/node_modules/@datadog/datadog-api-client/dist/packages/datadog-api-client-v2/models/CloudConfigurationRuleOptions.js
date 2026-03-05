"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudConfigurationRuleOptions = void 0;
/**
 * Options on cloud configuration rules.
 */
class CloudConfigurationRuleOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudConfigurationRuleOptions.attributeTypeMap;
    }
}
exports.CloudConfigurationRuleOptions = CloudConfigurationRuleOptions;
/**
 * @ignore
 */
CloudConfigurationRuleOptions.attributeTypeMap = {
    complianceRuleOptions: {
        baseName: "complianceRuleOptions",
        type: "CloudConfigurationComplianceRuleOptions",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudConfigurationRuleOptions.js.map