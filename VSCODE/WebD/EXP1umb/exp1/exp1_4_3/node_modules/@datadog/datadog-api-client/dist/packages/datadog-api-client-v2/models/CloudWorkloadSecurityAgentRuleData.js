"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleData = void 0;
/**
 * Object for a single Agent rule
 */
class CloudWorkloadSecurityAgentRuleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleData.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleData = CloudWorkloadSecurityAgentRuleData;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudWorkloadSecurityAgentRuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CloudWorkloadSecurityAgentRuleType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleData.js.map