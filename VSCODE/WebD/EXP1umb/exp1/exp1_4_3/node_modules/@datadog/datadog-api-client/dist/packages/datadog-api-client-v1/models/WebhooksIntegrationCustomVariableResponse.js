"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksIntegrationCustomVariableResponse = void 0;
/**
 * Custom variable for Webhook integration.
 */
class WebhooksIntegrationCustomVariableResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WebhooksIntegrationCustomVariableResponse.attributeTypeMap;
    }
}
exports.WebhooksIntegrationCustomVariableResponse = WebhooksIntegrationCustomVariableResponse;
/**
 * @ignore
 */
WebhooksIntegrationCustomVariableResponse.attributeTypeMap = {
    isSecret: {
        baseName: "is_secret",
        type: "boolean",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WebhooksIntegrationCustomVariableResponse.js.map