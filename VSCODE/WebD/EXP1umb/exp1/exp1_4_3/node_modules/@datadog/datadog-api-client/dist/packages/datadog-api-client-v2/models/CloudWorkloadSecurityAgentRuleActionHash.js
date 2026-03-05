"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleActionHash = void 0;
/**
 * Hash file specified by the field attribute
 */
class CloudWorkloadSecurityAgentRuleActionHash {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleActionHash.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleActionHash = CloudWorkloadSecurityAgentRuleActionHash;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleActionHash.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleActionHash.js.map