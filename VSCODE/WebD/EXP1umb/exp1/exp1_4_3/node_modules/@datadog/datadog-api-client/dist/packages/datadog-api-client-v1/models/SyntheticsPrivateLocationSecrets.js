"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPrivateLocationSecrets = void 0;
/**
 * Secrets for the private location. Only present in the response when creating the private location.
 */
class SyntheticsPrivateLocationSecrets {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPrivateLocationSecrets.attributeTypeMap;
    }
}
exports.SyntheticsPrivateLocationSecrets = SyntheticsPrivateLocationSecrets;
/**
 * @ignore
 */
SyntheticsPrivateLocationSecrets.attributeTypeMap = {
    authentication: {
        baseName: "authentication",
        type: "SyntheticsPrivateLocationSecretsAuthentication",
    },
    configDecryption: {
        baseName: "config_decryption",
        type: "SyntheticsPrivateLocationSecretsConfigDecryption",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPrivateLocationSecrets.js.map