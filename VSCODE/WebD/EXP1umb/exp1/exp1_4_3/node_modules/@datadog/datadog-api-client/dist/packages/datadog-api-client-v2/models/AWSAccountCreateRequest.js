"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountCreateRequest = void 0;
/**
 * AWS Account Create Request body.
 */
class AWSAccountCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountCreateRequest.attributeTypeMap;
    }
}
exports.AWSAccountCreateRequest = AWSAccountCreateRequest;
/**
 * @ignore
 */
AWSAccountCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSAccountCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountCreateRequest.js.map