"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhooksIntegrationCustomVariableUpdateRequest = void 0;
/**
 * Update request of a custom variable object.
 *
 * *All properties are optional.*
 */
class WebhooksIntegrationCustomVariableUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WebhooksIntegrationCustomVariableUpdateRequest.attributeTypeMap;
    }
}
exports.WebhooksIntegrationCustomVariableUpdateRequest = WebhooksIntegrationCustomVariableUpdateRequest;
/**
 * @ignore
 */
WebhooksIntegrationCustomVariableUpdateRequest.attributeTypeMap = {
    isSecret: {
        baseName: "is_secret",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
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
//# sourceMappingURL=WebhooksIntegrationCustomVariableUpdateRequest.js.map