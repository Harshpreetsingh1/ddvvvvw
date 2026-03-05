"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountResponseData = void 0;
/**
 * AWS Account response data.
 */
class AWSAccountResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountResponseData.attributeTypeMap;
    }
}
exports.AWSAccountResponseData = AWSAccountResponseData;
/**
 * @ignore
 */
AWSAccountResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AWSAccountResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AWSAccountType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountResponseData.js.map