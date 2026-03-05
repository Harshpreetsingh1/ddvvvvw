"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleCreateRequest = void 0;
/**
 * Request object that includes the Agent rule to create
 */
class CloudWorkloadSecurityAgentRuleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleCreateRequest.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleCreateRequest = CloudWorkloadSecurityAgentRuleCreateRequest;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudWorkloadSecurityAgentRuleCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleCreateRequest.js.map