"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeploymentRuleParams = void 0;
/**
 * Parameters for creating a deployment rule.
 */
class CreateDeploymentRuleParams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDeploymentRuleParams.attributeTypeMap;
    }
}
exports.CreateDeploymentRuleParams = CreateDeploymentRuleParams;
/**
 * @ignore
 */
CreateDeploymentRuleParams.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateDeploymentRuleParamsData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDeploymentRuleParams.js.map