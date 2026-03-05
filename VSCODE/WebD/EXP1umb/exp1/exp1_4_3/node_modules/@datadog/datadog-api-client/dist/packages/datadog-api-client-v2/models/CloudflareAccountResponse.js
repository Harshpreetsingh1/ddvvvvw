"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountResponse = void 0;
/**
 * The expected response schema when getting a Cloudflare account.
 */
class CloudflareAccountResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountResponse.attributeTypeMap;
    }
}
exports.CloudflareAccountResponse = CloudflareAccountResponse;
/**
 * @ignore
 */
CloudflareAccountResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudflareAccountResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAccountResponse.js.map