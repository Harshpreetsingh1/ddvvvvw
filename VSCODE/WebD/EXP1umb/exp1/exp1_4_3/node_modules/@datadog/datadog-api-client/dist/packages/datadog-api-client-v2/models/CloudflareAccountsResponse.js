"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountsResponse = void 0;
/**
 * The expected response schema when getting Cloudflare accounts.
 */
class CloudflareAccountsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountsResponse.attributeTypeMap;
    }
}
exports.CloudflareAccountsResponse = CloudflareAccountsResponse;
/**
 * @ignore
 */
CloudflareAccountsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CloudflareAccountResponseData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAccountsResponse.js.map