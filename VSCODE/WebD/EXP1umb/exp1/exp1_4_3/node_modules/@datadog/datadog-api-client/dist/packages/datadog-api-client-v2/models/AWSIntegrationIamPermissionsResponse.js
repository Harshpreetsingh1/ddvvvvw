"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSIntegrationIamPermissionsResponse = void 0;
/**
 * AWS Integration IAM Permissions response body.
 */
class AWSIntegrationIamPermissionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSIntegrationIamPermissionsResponse.attributeTypeMap;
    }
}
exports.AWSIntegrationIamPermissionsResponse = AWSIntegrationIamPermissionsResponse;
/**
 * @ignore
 */
AWSIntegrationIamPermissionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSIntegrationIamPermissionsResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSIntegrationIamPermissionsResponse.js.map