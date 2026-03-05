"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareIntegrationUpdate = void 0;
/**
 * The definition of the `CloudflareIntegrationUpdate` object.
 */
class CloudflareIntegrationUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareIntegrationUpdate.attributeTypeMap;
    }
}
exports.CloudflareIntegrationUpdate = CloudflareIntegrationUpdate;
/**
 * @ignore
 */
CloudflareIntegrationUpdate.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "CloudflareCredentialsUpdate",
    },
    type: {
        baseName: "type",
        type: "CloudflareIntegrationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CloudflareIntegrationUpdate.js.map