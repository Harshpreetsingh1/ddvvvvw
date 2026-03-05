"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountUpdateRequest = void 0;
/**
 * Payload schema when updating a Cloudflare account.
 */
class CloudflareAccountUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountUpdateRequest.attributeTypeMap;
    }
}
exports.CloudflareAccountUpdateRequest = CloudflareAccountUpdateRequest;
/**
 * @ignore
 */
CloudflareAccountUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CloudflareAccountUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAccountUpdateRequest.js.map