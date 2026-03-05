"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingCreateAttributes = void 0;
/**
 * Key/Value pair of attributes used for create request.
 */
class AuthNMappingCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingCreateAttributes.attributeTypeMap;
    }
}
exports.AuthNMappingCreateAttributes = AuthNMappingCreateAttributes;
/**
 * @ignore
 */
AuthNMappingCreateAttributes.attributeTypeMap = {
    attributeKey: {
        baseName: "attribute_key",
        type: "string",
    },
    attributeValue: {
        baseName: "attribute_value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingCreateAttributes.js.map