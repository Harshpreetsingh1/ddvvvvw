"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountResponse = void 0;
/**
 * AWS Account response body.
 */
class AWSAccountResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountResponse.attributeTypeMap;
    }
}
exports.AWSAccountResponse = AWSAccountResponse;
/**
 * @ignore
 */
AWSAccountResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AWSAccountResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountResponse.js.map