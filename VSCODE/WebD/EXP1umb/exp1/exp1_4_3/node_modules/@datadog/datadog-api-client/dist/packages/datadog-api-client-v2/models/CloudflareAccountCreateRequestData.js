"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountCreateRequestData = void 0;
/**
 * Data object for creating a Cloudflare account.
 */
class CloudflareAccountCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountCreateRequestData.attributeTypeMap;
    }
}
exports.CloudflareAccountCreateRequestData = CloudflareAccountCreateRequestData;
/**
 * @ignore
 */
CloudflareAccountCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudflareAccountCreateRequestAttributes",
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
//# sourceMappingURL=CloudflareAccountCreateRequestData.js.map