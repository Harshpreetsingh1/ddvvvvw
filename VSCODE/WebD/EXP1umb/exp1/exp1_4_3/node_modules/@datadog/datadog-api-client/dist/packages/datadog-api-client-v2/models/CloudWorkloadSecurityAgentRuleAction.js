"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleAction = void 0;
/**
 * The action the rule can perform if triggered
 */
class CloudWorkloadSecurityAgentRuleAction {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleAction.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleAction = CloudWorkloadSecurityAgentRuleAction;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleAction.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "string",
    },
    hash: {
        baseName: "hash",
        type: "CloudWorkloadSecurityAgentRuleActionHash",
    },
    kill: {
        baseName: "kill",
        type: "CloudWorkloadSecurityAgentRuleKill",
    },
    metadata: {
        baseName: "metadata",
        type: "CloudWorkloadSecurityAgentRuleActionMetadata",
    },
    set: {
        baseName: "set",
        type: "CloudWorkloadSecurityAgentRuleActionSet",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleAction.js.map