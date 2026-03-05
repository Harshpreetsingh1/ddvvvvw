"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyCreateRequest = void 0;
/**
 * Request object that includes the Agent policy to create
 */
class CloudWorkloadSecurityAgentPolicyCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyCreateRequest.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyCreateRequest = CloudWorkloadSecurityAgentPolicyCreateRequest;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudWorkloadSecurityAgentPolicyCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyCreateRequest.js.map