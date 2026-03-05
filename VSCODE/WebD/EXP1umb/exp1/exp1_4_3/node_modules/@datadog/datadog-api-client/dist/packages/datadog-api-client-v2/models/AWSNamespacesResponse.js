"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSNamespacesResponse = void 0;
/**
 * AWS Namespaces response body.
 */
class AWSNamespacesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSNamespacesResponse.attributeTypeMap;
    }
}
exports.AWSNamespacesResponse = AWSNamespacesResponse;
/**
 * @ignore
 */
AWSNamespacesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSNamespacesResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSNamespacesResponse.js.map