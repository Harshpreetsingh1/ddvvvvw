"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AWSAccountListResponse = void 0;
/**
 * List of enabled AWS accounts.
 */
class AWSAccountListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AWSAccountListResponse.attributeTypeMap;
    }
}
exports.AWSAccountListResponse = AWSAccountListResponse;
/**
 * @ignore
 */
AWSAccountListResponse.attributeTypeMap = {
    accounts: {
        baseName: "accounts",
        type: "Array<AWSAccount>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AWSAccountListResponse.js.map