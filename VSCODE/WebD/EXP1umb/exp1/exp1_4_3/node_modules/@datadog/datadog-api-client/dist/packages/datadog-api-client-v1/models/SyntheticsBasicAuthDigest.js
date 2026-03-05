"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBasicAuthDigest = void 0;
/**
 * Object to handle digest authentication when performing the test.
 */
class SyntheticsBasicAuthDigest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBasicAuthDigest.attributeTypeMap;
    }
}
exports.SyntheticsBasicAuthDigest = SyntheticsBasicAuthDigest;
/**
 * @ignore
 */
SyntheticsBasicAuthDigest.attributeTypeMap = {
    password: {
        baseName: "password",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsBasicAuthDigestType",
        required: true,
    },
    username: {
        baseName: "username",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBasicAuthDigest.js.map