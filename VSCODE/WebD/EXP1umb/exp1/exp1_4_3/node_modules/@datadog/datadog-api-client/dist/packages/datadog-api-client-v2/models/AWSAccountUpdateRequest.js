"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountUpdateRequest = void 0;
/**
 * AWS Account Update Request body.
 */
class AWSAccountUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountUpdateRequest.attributeTypeMap;
    }
}
exports.AWSAccountUpdateRequest = AWSAccountUpdateRequest;
/**
 * @ignore
 */
AWSAccountUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSAccountUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountUpdateRequest.js.map