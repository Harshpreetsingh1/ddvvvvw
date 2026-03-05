"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingAttributes = void 0;
/**
 * Attributes of AuthN Mapping.
 */
class AuthNMappingAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingAttributes.attributeTypeMap;
    }
}
exports.AuthNMappingAttributes = AuthNMappingAttributes;
/**
 * @ignore
 */
AuthNMappingAttributes.attributeTypeMap = {
    attributeKey: {
        baseName: "attribute_key",
        type: "string",
    },
    attributeValue: {
        baseName: "attribute_value",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    samlAssertionAttributeId: {
        baseName: "saml_assertion_attribute_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingAttributes.js.map