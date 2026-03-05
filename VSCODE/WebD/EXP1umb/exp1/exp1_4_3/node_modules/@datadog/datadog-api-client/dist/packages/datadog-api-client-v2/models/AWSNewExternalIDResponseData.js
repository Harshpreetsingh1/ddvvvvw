"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSNewExternalIDResponseData = void 0;
/**
 * AWS External ID response body.
 */
class AWSNewExternalIDResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSNewExternalIDResponseData.attributeTypeMap;
    }
}
exports.AWSNewExternalIDResponseData = AWSNewExternalIDResponseData;
/**
 * @ignore
 */
AWSNewExternalIDResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSNewExternalIDResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSNewExternalIDResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSNewExternalIDResponseData.js.map