"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyData = void 0;
/**
 * Object for a single Agent policy
 */
class CloudWorkloadSecurityAgentPolicyData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyData.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyData = CloudWorkloadSecurityAgentPolicyData;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudWorkloadSecurityAgentPolicyAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CloudWorkloadSecurityAgentPolicyType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyData.js.map