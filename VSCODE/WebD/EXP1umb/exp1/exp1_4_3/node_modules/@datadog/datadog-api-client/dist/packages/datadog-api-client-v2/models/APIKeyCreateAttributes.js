"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyCreateAttributes = void 0;
/**
 * Attributes used to create an API Key.
 */
class APIKeyCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeyCreateAttributes.attributeTypeMap;
    }
}
exports.APIKeyCreateAttributes = APIKeyCreateAttributes;
/**
 * @ignore
 */
APIKeyCreateAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    remoteConfigReadEnabled: {
        baseName: "remote_config_read_enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeyCreateAttributes.js.map