"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksIntegrationUpdateRequest = void 0;
/**
 * Update request of a Webhooks integration object.
 *
 * *All properties are optional.*
 */
class WebhooksIntegrationUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WebhooksIntegrationUpdateRequest.attributeTypeMap;
    }
}
exports.WebhooksIntegrationUpdateRequest = WebhooksIntegrationUpdateRequest;
/**
 * @ignore
 */
WebhooksIntegrationUpdateRequest.attributeTypeMap = {
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
    },
    payload: {
        baseName: "payload",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WebhooksIntegrationUpdateRequest.js.map