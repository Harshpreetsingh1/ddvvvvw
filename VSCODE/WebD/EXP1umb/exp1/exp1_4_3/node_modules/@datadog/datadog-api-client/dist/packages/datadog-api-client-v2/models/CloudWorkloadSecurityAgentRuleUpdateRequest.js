"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleUpdateRequest = void 0;
/**
 * Request object that includes the Agent rule with the attributes to update
 */
class CloudWorkloadSecurityAgentRuleUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleUpdateRequest.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleUpdateRequest = CloudWorkloadSecurityAgentRuleUpdateRequest;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudWorkloadSecurityAgentRuleUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleUpdateRequest.js.map