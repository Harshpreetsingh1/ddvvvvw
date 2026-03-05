"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareGlobalAPITokenUpdate = void 0;
/**
 * The definition of the `CloudflareGlobalAPIToken` object.
 */
class CloudflareGlobalAPITokenUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareGlobalAPITokenUpdate.attributeTypeMap;
    }
}
exports.CloudflareGlobalAPITokenUpdate = CloudflareGlobalAPITokenUpdate;
/**
 * @ignore
 */
CloudflareGlobalAPITokenUpdate.attributeTypeMap = {
    authEmail: {
        baseName: "auth_email",
        type: "string",
    },
    globalApiKey: {
        baseName: "global_api_key",
        type: "string",
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
//# sourceMappingURL=CloudflareGlobalAPITokenUpdate.js.map