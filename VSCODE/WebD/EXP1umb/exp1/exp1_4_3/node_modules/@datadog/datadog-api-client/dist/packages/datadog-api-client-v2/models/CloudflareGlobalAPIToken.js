"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareGlobalAPIToken = void 0;
/**
 * The definition of the `CloudflareGlobalAPIToken` object.
 */
class CloudflareGlobalAPIToken {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareGlobalAPIToken.attributeTypeMap;
    }
}
exports.CloudflareGlobalAPIToken = CloudflareGlobalAPIToken;
/**
 * @ignore
 */
CloudflareGlobalAPIToken.attributeTypeMap = {
    authEmail: {
        baseName: "auth_email",
        type: "string",
        required: true,
    },
    globalApiKey: {
        baseName: "global_api_key",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CloudflareGlobalAPITokenType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareGlobalAPIToken.js.map