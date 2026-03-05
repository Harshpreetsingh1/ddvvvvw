"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingUpdateAttributes = void 0;
/**
 * Key/Value pair of attributes used for update request.
 */
class AuthNMappingUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingUpdateAttributes.attributeTypeMap;
    }
}
exports.AuthNMappingUpdateAttributes = AuthNMappingUpdateAttributes;
/**
 * @ignore
 */
AuthNMappingUpdateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=AuthNMappingUpdateAttributes.js.map