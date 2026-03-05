"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentPolicyUpdateData = void 0;
/**
 * Object for a single Agent policy
 */
class CloudWorkloadSecurityAgentPolicyUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentPolicyUpdateData.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentPolicyUpdateData = CloudWorkloadSecurityAgentPolicyUpdateData;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentPolicyUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudWorkloadSecurityAgentPolicyUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=CloudWorkloadSecurityAgentPolicyUpdateData.js.map