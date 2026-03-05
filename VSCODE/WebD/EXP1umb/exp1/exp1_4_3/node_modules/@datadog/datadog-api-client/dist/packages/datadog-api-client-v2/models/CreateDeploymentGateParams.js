"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeploymentGateParams = void 0;
/**
 * Parameters for creating a deployment gate.
 */
class CreateDeploymentGateParams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDeploymentGateParams.attributeTypeMap;
    }
}
exports.CreateDeploymentGateParams = CreateDeploymentGateParams;
/**
 * @ignore
 */
CreateDeploymentGateParams.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateDeploymentGateParamsData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDeploymentGateParams.js.map