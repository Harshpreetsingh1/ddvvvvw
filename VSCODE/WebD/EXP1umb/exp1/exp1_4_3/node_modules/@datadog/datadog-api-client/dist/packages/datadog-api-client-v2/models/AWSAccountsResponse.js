"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountsResponse = void 0;
/**
 * AWS Accounts response body.
 */
class AWSAccountsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountsResponse.attributeTypeMap;
    }
}
exports.AWSAccountsResponse = AWSAccountsResponse;
/**
 * @ignore
 */
AWSAccountsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AWSAccountResponseData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountsResponse.js.map