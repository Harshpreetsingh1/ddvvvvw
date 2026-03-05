"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleActionMetadata = void 0;
/**
 * The metadata action applied on the scope matching the rule
 */
class CloudWorkloadSecurityAgentRuleActionMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleActionMetadata.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleActionMetadata = CloudWorkloadSecurityAgentRuleActionMetadata;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleActionMetadata.attributeTypeMap = {
    imageTag: {
        baseName: "image_tag",
        type: "string",
    },
    service: {
        baseName: "service",
        type: "string",
    },
    shortImage: {
        baseName: "short_image",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleActionMetadata.js.map