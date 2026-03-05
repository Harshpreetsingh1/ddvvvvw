"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyCreateData = void 0;
/**
 * Object for a single Agent rule
 */
class CloudWorkloadSecurityAgentPolicyCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyCreateData.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyCreateData = CloudWorkloadSecurityAgentPolicyCreateData;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudWorkloadSecurityAgentPolicyCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CloudWorkloadSecurityAgentPolicyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyCreateData.js.map