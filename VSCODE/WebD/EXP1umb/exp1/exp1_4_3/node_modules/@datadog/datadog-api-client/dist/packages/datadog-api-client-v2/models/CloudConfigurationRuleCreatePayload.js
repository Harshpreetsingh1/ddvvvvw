"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudConfigurationRuleCreatePayload = void 0;
/**
 * Create a new cloud configuration rule.
 */
class CloudConfigurationRuleCreatePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudConfigurationRuleCreatePayload.attributeTypeMap;
    }
}
exports.CloudConfigurationRuleCreatePayload = CloudConfigurationRuleCreatePayload;
/**
 * @ignore
 */
CloudConfigurationRuleCreatePayload.attributeTypeMap = {
    cases: {
        baseName: "cases",
        type: "Array<CloudConfigurationRuleCaseCreate>",
        required: true,
    },
    complianceSignalOptions: {
        baseName: "complianceSignalOptions",
        type: "CloudConfigurationRuleComplianceSignalOptions",
        required: true,
    },
    filters: {
        baseName: "filters",
        type: "Array<SecurityMonitoringFilter>",
    },
    isEnabled: {
        baseName: "isEnabled",
        type: "boolean",
        required: true,
    },
    message: {
        baseName: "message",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    options: {
        baseName: "options",
        type: "CloudConfigurationRuleOptions",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    type: {
        baseName: "type",
        type: "CloudConfigurationRuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudConfigurationRuleCreatePayload.js.map