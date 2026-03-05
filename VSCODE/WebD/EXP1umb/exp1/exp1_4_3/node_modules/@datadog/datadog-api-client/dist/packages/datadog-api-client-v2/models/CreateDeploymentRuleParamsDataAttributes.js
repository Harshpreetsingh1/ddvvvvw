"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeploymentRuleParamsDataAttributes = void 0;
/**
 * Parameters for creating a deployment rule.
 */
class CreateDeploymentRuleParamsDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDeploymentRuleParamsDataAttributes.attributeTypeMap;
    }
}
exports.CreateDeploymentRuleParamsDataAttributes = CreateDeploymentRuleParamsDataAttributes;
/**
 * @ignore
 */
CreateDeploymentRuleParamsDataAttributes.attributeTypeMap = {
    dryRun: {
        baseName: "dry_run",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    options: {
        baseName: "options",
        type: "DeploymentRulesOptions",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDeploymentRuleParamsDataAttributes.js.map