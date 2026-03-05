"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleCreateAttributes = void 0;
/**
 * Create a new Cloud Workload Security Agent rule.
 */
class CloudWorkloadSecurityAgentRuleCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleCreateAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleCreateAttributes = CloudWorkloadSecurityAgentRuleCreateAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleCreateAttributes.attributeTypeMap = {
    actions: {
        baseName: "actions",
        type: "Array<CloudWorkloadSecurityAgentRuleAction>",
    },
    agentVersion: {
        baseName: "agent_version",
        type: "string",
    },
    blocking: {
        baseName: "blocking",
        type: "Array<string>",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    disabled: {
        baseName: "disabled",
        type: "Array<string>",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    expression: {
        baseName: "expression",
        type: "string",
        required: true,
    },
    filters: {
        baseName: "filters",
        type: "Array<string>",
    },
    monitoring: {
        baseName: "monitoring",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    policyId: {
        baseName: "policy_id",
        type: "string",
    },
    productTags: {
        baseName: "product_tags",
        type: "Array<string>",
    },
    silent: {
        baseName: "silent",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleCreateAttributes.js.map