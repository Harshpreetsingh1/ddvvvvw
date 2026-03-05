"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPoliciesListResponse = void 0;
/**
 * Response object that includes a list of Agent policies
 */
class CloudWorkloadSecurityAgentPoliciesListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPoliciesListResponse.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPoliciesListResponse = CloudWorkloadSecurityAgentPoliciesListResponse;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPoliciesListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CloudWorkloadSecurityAgentPolicyData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPoliciesListResponse.js.map