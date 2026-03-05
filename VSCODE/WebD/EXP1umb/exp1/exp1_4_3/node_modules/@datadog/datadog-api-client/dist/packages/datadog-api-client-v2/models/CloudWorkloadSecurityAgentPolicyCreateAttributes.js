"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyCreateAttributes = void 0;
/**
 * Create a new Cloud Workload Security Agent policy
 */
class CloudWorkloadSecurityAgentPolicyCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyCreateAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyCreateAttributes = CloudWorkloadSecurityAgentPolicyCreateAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyCreateAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
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
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyCreateAttributes.js.map