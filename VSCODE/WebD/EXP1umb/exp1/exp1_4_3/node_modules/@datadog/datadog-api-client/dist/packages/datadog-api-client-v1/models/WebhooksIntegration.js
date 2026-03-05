"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksIntegration = void 0;
/**
 * Datadog-Webhooks integration.
 */
class WebhooksIntegration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WebhooksIntegration.attributeTypeMap;
    }
}
exports.WebhooksIntegration = WebhooksIntegration;
/**
 * @ignore
 */
WebhooksIntegration.attributeTypeMap = {
    customHeaders: {
        baseName: "custom_headers",
        type: "string",
    },
    encodeAs: {
        baseName: "encode_as",
        type: "WebhooksIntegrationEncoding",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    payload: {
        baseName: "payload",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WebhooksIntegration.js.map