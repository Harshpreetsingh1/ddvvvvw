"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleCreateData = void 0;
/**
 * Object for a single Agent rule
 */
class CloudWorkloadSecurityAgentRuleCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleCreateData.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleCreateData = CloudWorkloadSecurityAgentRuleCreateData;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudWorkloadSecurityAgentRuleCreateAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CloudWorkloadSecurityAgentRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleCreateData.js.map