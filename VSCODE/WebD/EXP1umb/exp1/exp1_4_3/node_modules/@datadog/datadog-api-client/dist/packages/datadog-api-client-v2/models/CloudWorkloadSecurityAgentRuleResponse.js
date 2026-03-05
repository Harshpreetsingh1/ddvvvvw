"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleResponse = void 0;
/**
 * Response object that includes an Agent rule
 */
class CloudWorkloadSecurityAgentRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleResponse.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleResponse = CloudWorkloadSecurityAgentRuleResponse;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudWorkloadSecurityAgentRuleData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleResponse.js.map