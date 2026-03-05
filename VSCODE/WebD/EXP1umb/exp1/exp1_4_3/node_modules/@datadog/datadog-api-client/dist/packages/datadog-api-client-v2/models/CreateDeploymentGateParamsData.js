"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDeploymentGateParamsData = void 0;
/**
 * Parameters for creating a deployment gate.
 */
class CreateDeploymentGateParamsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDeploymentGateParamsData.attributeTypeMap;
    }
}
exports.CreateDeploymentGateParamsData = CreateDeploymentGateParamsData;
/**
 * @ignore
 */
CreateDeploymentGateParamsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateDeploymentGateParamsDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DeploymentGateDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDeploymentGateParamsData.js.map