"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAPIToken = void 0;
/**
 * The definition of the `CloudflareAPIToken` object.
 */
class CloudflareAPIToken {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAPIToken.attributeTypeMap;
    }
}
exports.CloudflareAPIToken = CloudflareAPIToken;
/**
 * @ignore
 */
CloudflareAPIToken.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CloudflareAPITokenType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareAPIToken.js.map