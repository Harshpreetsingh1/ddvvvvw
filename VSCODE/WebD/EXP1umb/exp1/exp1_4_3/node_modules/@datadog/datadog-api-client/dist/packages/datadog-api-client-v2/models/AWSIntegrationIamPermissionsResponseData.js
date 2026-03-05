"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSIntegrationIamPermissionsResponseData = void 0;
/**
 * AWS Integration IAM Permissions response data.
 */
class AWSIntegrationIamPermissionsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSIntegrationIamPermissionsResponseData.attributeTypeMap;
    }
}
exports.AWSIntegrationIamPermissionsResponseData = AWSIntegrationIamPermissionsResponseData;
/**
 * @ignore
 */
AWSIntegrationIamPermissionsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSIntegrationIamPermissionsResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "AWSIntegrationIamPermissionsResponseDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSIntegrationIamPermissionsResponseData.js.map