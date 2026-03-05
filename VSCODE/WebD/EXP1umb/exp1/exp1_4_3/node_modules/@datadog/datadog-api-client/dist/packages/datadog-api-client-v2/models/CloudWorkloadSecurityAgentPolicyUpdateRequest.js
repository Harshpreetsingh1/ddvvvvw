"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyUpdateRequest = void 0;
/**
 * Request object that includes the Agent policy with the attributes to update
 */
class CloudWorkloadSecurityAgentPolicyUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyUpdateRequest.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyUpdateRequest = CloudWorkloadSecurityAgentPolicyUpdateRequest;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudWorkloadSecurityAgentPolicyUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyUpdateRequest.js.map