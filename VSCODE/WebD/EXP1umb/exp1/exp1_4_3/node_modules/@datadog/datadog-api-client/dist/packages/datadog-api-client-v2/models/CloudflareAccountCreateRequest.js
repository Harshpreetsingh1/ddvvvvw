"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountCreateRequest = void 0;
/**
 * Payload schema when adding a Cloudflare account.
 */
class CloudflareAccountCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountCreateRequest.attributeTypeMap;
    }
}
exports.CloudflareAccountCreateRequest = CloudflareAccountCreateRequest;
/**
 * @ignore
 */
CloudflareAccountCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudflareAccountCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAccountCreateRequest.js.map