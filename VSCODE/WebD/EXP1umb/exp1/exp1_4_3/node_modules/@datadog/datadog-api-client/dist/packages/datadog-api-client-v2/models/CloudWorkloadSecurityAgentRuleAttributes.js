"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudWorkloadSecurityAgentRuleAttributes = void 0;
/**
 * A Cloud Workload Security Agent rule returned by the API
 */
class CloudWorkloadSecurityAgentRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudWorkloadSecurityAgentRuleAttributes.attributeTypeMap;
    }
}
exports.CloudWorkloadSecurityAgentRuleAttributes = CloudWorkloadSecurityAgentRuleAttributes;
/**
 * @ignore
 */
CloudWorkloadSecurityAgentRuleAttributes.attributeTypeMap = {
    actions: {
        baseName: "actions",
        type: "Array<CloudWorkloadSecurityAgentRuleAction>",
    },
    agentConstraint: {
        baseName: "agentConstraint",
        type: "string",
    },
    blocking: {
        baseName: "blocking",
        type: "Array<string>",
    },
    category: {
        baseName: "category",
        type: "string",
    },
    creationAuthorUuId: {
        baseName: "creationAuthorUuId",
        type: "string",
    },
    creationDate: {
        baseName: "creationDate",
        type: "number",
        format: "int64",
    },
    creator: {
        baseName: "creator",
        type: "CloudWorkloadSecurityAgentRuleCreatorAttributes",
    },
    defaultRule: {
        baseName: "defaultRule",
        type: "boolean",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    disabled: {
        baseName: "disabled",
        type: "Array<string>",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    expression: {
        baseName: "expression",
        type: "string",
    },
    filters: {
        baseName: "filters",
        type: "Array<string>",
    },
    monitoring: {
        baseName: "monitoring",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    productTags: {
        baseName: "product_tags",
        type: "Array<string>",
    },
    silent: {
        baseName: "silent",
        type: "boolean",
    },
    updateAuthorUuId: {
        baseName: "updateAuthorUuId",
        type: "string",
    },
    updateDate: {
        baseName: "updateDate",
        type: "number",
        format: "int64",
    },
    updatedAt: {
        baseName: "updatedAt",
        type: "number",
        format: "int64",
    },
    updater: {
        baseName: "updater",
        type: "CloudWorkloadSecurityAgentRuleUpdaterAttributes",
    },
    version: {
        baseName: "version",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudWorkloadSecurityAgentRuleAttributes.js.map