"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyUpdaterAttributes = void 0;
/**
 * The attributes of the user who last updated the policy
 */
class CloudWorkloadSecurityAgentPolicyUpdaterAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyUpdaterAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyUpdaterAttributes = CloudWorkloadSecurityAgentPolicyUpdaterAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyUpdaterAttributes.attributeTypeMap = {
    handle: {
        baseName: "handle",
        type: "string",
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
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyUpdaterAttributes.js.map