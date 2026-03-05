"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPrivateLocationSecretsAuthentication = void 0;
/**
 * Authentication part of the secrets.
 */
class SyntheticsPrivateLocationSecretsAuthentication {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPrivateLocationSecretsAuthentication.attributeTypeMap;
    }
}
exports.SyntheticsPrivateLocationSecretsAuthentication = SyntheticsPrivateLocationSecretsAuthentication;
/**
 * @ignore
 */
SyntheticsPrivateLocationSecretsAuthentication.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    key: {
        baseName: "key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPrivateLocationSecretsAuthentication.js.map