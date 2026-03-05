"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeploymentRuleParamsData = void 0;
/**
 * Parameters for creating a deployment rule.
 */
class CreateDeploymentRuleParamsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDeploymentRuleParamsData.attributeTypeMap;
    }
}
exports.CreateDeploymentRuleParamsData = CreateDeploymentRuleParamsData;
/**
 * @ignore
 */
CreateDeploymentRuleParamsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateDeploymentRuleParamsDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DeploymentRuleDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDeploymentRuleParamsData.js.map