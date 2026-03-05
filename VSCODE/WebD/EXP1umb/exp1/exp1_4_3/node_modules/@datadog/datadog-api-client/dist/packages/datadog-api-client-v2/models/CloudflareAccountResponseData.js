"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountResponseData = void 0;
/**
 * Data object of a Cloudflare account.
 */
class CloudflareAccountResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountResponseData.attributeTypeMap;
    }
}
exports.CloudflareAccountResponseData = CloudflareAccountResponseData;
/**
 * @ignore
 */
CloudflareAccountResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudflareAccountResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CloudflareAccountType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAccountResponseData.js.map