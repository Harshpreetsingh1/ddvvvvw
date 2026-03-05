"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAccountUpdateRequestData = void 0;
/**
 * Data object for updating a Cloudflare account.
 */
class CloudflareAccountUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAccountUpdateRequestData.attributeTypeMap;
    }
}
exports.CloudflareAccountUpdateRequestData = CloudflareAccountUpdateRequestData;
/**
 * @ignore
 */
CloudflareAccountUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CloudflareAccountUpdateRequestAttributes",
    },
    type: {
        baseName: "type",
        type: "CloudflareAccountType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAccountUpdateRequestData.js.map