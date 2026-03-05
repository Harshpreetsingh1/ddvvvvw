"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSNamespacesResponseData = void 0;
/**
 * AWS Namespaces response data.
 */
class AWSNamespacesResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSNamespacesResponseData.attributeTypeMap;
    }
}
exports.AWSNamespacesResponseData = AWSNamespacesResponseData;
/**
 * @ignore
 */
AWSNamespacesResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSNamespacesResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSNamespacesResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSNamespacesResponseData.js.map