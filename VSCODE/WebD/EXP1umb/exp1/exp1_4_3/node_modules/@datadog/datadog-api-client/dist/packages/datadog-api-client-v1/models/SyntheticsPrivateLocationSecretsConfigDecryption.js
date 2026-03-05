"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPrivateLocationSecretsConfigDecryption = void 0;
/**
 * Private key for the private location.
 */
class SyntheticsPrivateLocationSecretsConfigDecryption {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPrivateLocationSecretsConfigDecryption.attributeTypeMap;
    }
}
exports.SyntheticsPrivateLocationSecretsConfigDecryption = SyntheticsPrivateLocationSecretsConfigDecryption;
/**
 * @ignore
 */
SyntheticsPrivateLocationSecretsConfigDecryption.attributeTypeMap = {
    key: {
        baseName: "key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPrivateLocationSecretsConfigDecryption.js.map