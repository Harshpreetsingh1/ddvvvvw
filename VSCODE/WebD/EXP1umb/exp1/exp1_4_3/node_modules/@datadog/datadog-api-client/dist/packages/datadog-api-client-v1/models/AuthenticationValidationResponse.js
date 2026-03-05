"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationValidationResponse = void 0;
/**
 * Represent validation endpoint responses.
 */
class AuthenticationValidationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthenticationValidationResponse.attributeTypeMap;
    }
}
exports.AuthenticationValidationResponse = AuthenticationValidationResponse;
/**
 * @ignore
 */
AuthenticationValidationResponse.attributeTypeMap = {
    valid: {
        baseName: "valid",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthenticationValidationResponse.js.map