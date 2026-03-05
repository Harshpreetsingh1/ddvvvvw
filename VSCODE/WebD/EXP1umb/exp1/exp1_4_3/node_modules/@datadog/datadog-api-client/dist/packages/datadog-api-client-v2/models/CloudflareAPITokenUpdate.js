"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareAPITokenUpdate = void 0;
/**
 * The definition of the `CloudflareAPIToken` object.
 */
class CloudflareAPITokenUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareAPITokenUpdate.attributeTypeMap;
    }
}
exports.CloudflareAPITokenUpdate = CloudflareAPITokenUpdate;
/**
 * @ignore
 */
CloudflareAPITokenUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
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
//# sourceMappingURL=CloudflareAPITokenUpdate.js.map