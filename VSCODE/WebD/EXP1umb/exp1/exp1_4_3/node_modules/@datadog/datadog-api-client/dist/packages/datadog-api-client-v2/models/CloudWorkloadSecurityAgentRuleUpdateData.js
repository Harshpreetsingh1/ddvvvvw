"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleUpdateData = void 0;
/**
 * Object for a single Agent rule
 */
class CloudWorkloadSecurityAgentRuleUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleUpdateData.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleUpdateData = CloudWorkloadSecurityAgentRuleUpdateData;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudWorkloadSecurityAgentRuleUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleUpdateData.js.map