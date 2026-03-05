"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsPrivateLocationCreationResponse = void 0;
/**
 * Object that contains the new private location, the public key for result encryption, and the configuration skeleton.
 */
class SyntheticsPrivateLocationCreationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsPrivateLocationCreationResponse.attributeTypeMap;
    }
}
exports.SyntheticsPrivateLocationCreationResponse = SyntheticsPrivateLocationCreationResponse;
/**
 * @ignore
 */
SyntheticsPrivateLocationCreationResponse.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "any",
    },
    privateLocation: {
        baseName: "private_location",
        type: "SyntheticsPrivateLocation",
    },
    resultEncryption: {
        baseName: "result_encryption",
        type: "SyntheticsPrivateLocationCreationResponseResultEncryption",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsPrivateLocationCreationResponse.js.map