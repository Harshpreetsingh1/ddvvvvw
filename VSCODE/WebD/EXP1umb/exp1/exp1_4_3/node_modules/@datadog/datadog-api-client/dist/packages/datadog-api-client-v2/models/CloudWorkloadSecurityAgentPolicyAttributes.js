"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyAttributes = void 0;
/**
 * A Cloud Workload Security Agent policy returned by the API
 */
class CloudWorkloadSecurityAgentPolicyAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyAttributes = CloudWorkloadSecurityAgentPolicyAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyAttributes.attributeTypeMap = {
    blockingRulesCount: {
        baseName: "blockingRulesCount",
        type: "number",
        format: "int32",
    },
    datadogManaged: {
        baseName: "datadogManaged",
        type: "boolean",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    disabledRulesCount: {
        baseName: "disabledRulesCount",
        type: "number",
        format: "int32",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    hostTags: {
        baseName: "hostTags",
        type: "Array<string>",
    },
    hostTagsLists: {
        baseName: "hostTagsLists",
        type: "Array<Array<string>>",
    },
    monitoringRulesCount: {
        baseName: "monitoringRulesCount",
        type: "number",
        format: "int32",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    pinned: {
        baseName: "pinned",
        type: "boolean",
    },
    policyType: {
        baseName: "policyType",
        type: "string",
    },
    policyVersion: {
        baseName: "policyVersion",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "number",
        format: "int64",
    },
    ruleCount: {
        baseName: "ruleCount",
        type: "number",
        format: "int32",
    },
    updateDate: {
        baseName: "updateDate",
        type: "number",
        format: "int64",
    },
    updatedAt: {
        baseName: "updatedAt",
        type: "number",
        format: "int64",
    },
    updater: {
        baseName: "updater",
        type: "CloudWorkloadSecurityAgentPolicyUpdaterAttributes",
    },
    versions: {
        baseName: "versions",
        type: "Array<CloudWorkloadSecurityAgentPolicyVersion>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyAttributes.js.map