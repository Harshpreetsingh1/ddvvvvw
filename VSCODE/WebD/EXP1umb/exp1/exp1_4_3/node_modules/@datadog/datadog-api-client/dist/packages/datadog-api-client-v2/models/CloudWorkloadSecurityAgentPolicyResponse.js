"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyResponse = void 0;
/**
 * Response object that includes an Agent policy
 */
class CloudWorkloadSecurityAgentPolicyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyResponse.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyResponse = CloudWorkloadSecurityAgentPolicyResponse;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudWorkloadSecurityAgentPolicyData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyResponse.js.map