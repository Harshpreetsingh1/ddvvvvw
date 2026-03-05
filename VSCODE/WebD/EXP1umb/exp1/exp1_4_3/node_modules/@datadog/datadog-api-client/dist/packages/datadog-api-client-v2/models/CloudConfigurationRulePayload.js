"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudConfigurationRulePayload = void 0;
/**
 * The payload of a cloud configuration rule.
 */
class CloudConfigurationRulePayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudConfigurationRulePayload.attributeTypeMap;
    }
}
exports.CloudConfigurationRulePayload = CloudConfigurationRulePayload;
/**
 * @ignore
 */
CloudConfigurationRulePayload.attributeTypeMap = {
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
    customMessage: {
        baseName: "customMessage",
        type: "string",
    },
    customName: {
        baseName: "customName",
        type: "string",
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
//# sourceMappingURL=CloudConfigurationRulePayload.js.map