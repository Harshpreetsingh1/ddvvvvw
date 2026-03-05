"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRulesListResponse = void 0;
/**
 * Response object that includes a list of Agent rule
 */
class CloudWorkloadSecurityAgentRulesListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRulesListResponse.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRulesListResponse = CloudWorkloadSecurityAgentRulesListResponse;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRulesListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CloudWorkloadSecurityAgentRuleData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRulesListResponse.js.map