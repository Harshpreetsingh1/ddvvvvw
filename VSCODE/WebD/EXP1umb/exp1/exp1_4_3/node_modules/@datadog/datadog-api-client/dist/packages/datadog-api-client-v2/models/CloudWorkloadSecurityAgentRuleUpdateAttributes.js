"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleUpdateAttributes = void 0;
/**
 * Update an existing Cloud Workload Security Agent rule
 */
class CloudWorkloadSecurityAgentRuleUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleUpdateAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleUpdateAttributes = CloudWorkloadSecurityAgentRuleUpdateAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleUpdateAttributes.attributeTypeMap = {
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
    },
    monitoring: {
        baseName: "monitoring",
        type: "Array<string>",
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
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleUpdateAttributes.js.map