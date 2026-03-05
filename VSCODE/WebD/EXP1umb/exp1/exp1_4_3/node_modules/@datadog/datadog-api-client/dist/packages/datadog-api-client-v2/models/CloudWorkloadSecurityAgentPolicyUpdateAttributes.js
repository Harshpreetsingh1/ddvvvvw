"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyUpdateAttributes = void 0;
/**
 * Update an existing Cloud Workload Security Agent policy
 */
class CloudWorkloadSecurityAgentPolicyUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyUpdateAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyUpdateAttributes = CloudWorkloadSecurityAgentPolicyUpdateAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyUpdateAttributes.attributeTypeMap = {
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
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyUpdateAttributes.js.map