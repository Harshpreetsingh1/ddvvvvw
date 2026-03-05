"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudflareIntegration = void 0;
/**
 * The definition of the `CloudflareIntegration` object.
 */
class CloudflareIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CloudflareIntegration.attributeTypeMap;
    }
}
exports.CloudflareIntegration = CloudflareIntegration;
/**
 * @ignore
 */
CloudflareIntegration.attributeTypeMap = {
    credentials: {
        baseName: "credentials",
        type: "CloudflareCredentials",
        required: true,
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
//# sourceMappingURL=CloudflareIntegration.js.map