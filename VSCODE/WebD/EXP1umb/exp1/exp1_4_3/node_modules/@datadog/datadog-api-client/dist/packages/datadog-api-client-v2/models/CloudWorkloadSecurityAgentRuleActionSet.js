"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleActionSet = void 0;
/**
 * The set action applied on the scope matching the rule
 */
class CloudWorkloadSecurityAgentRuleActionSet {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleActionSet.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleActionSet = CloudWorkloadSecurityAgentRuleActionSet;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleActionSet.attributeTypeMap = {
    append: {
        baseName: "append",
        type: "boolean",
    },
    defaultValue: {
        baseName: "default_value",
        type: "string",
    },
    expression: {
        baseName: "expression",
        type: "string",
    },
    field: {
        baseName: "field",
        type: "string",
    },
    inherited: {
        baseName: "inherited",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int64",
    },
    ttl: {
        baseName: "ttl",
        type: "number",
        format: "int64",
    },
    value: {
        baseName: "value",
        type: "CloudWorkloadSecurityAgentRuleActionSetValue",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleActionSet.js.map