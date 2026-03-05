"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleCreatorAttributes = void 0;
/**
 * The attributes of the user who created the Agent rule
 */
class CloudWorkloadSecurityAgentRuleCreatorAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleCreatorAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleCreatorAttributes = CloudWorkloadSecurityAgentRuleCreatorAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleCreatorAttributes.attributeTypeMap = {
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
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleCreatorAttributes.js.map