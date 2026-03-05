"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBasicAuthSigv4 = void 0;
/**
 * Object to handle `SIGV4` authentication when performing the test.
 */
class SyntheticsBasicAuthSigv4 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBasicAuthSigv4.attributeTypeMap;
    }
}
exports.SyntheticsBasicAuthSigv4 = SyntheticsBasicAuthSigv4;
/**
 * @ignore
 */
SyntheticsBasicAuthSigv4.attributeTypeMap = {
    accessKey: {
        baseName: "accessKey",
        type: "string",
        required: true,
    },
    region: {
        baseName: "region",
        type: "string",
    },
    secretKey: {
        baseName: "secretKey",
        type: "string",
        required: true,
    },
    serviceName: {
        baseName: "serviceName",
        type: "string",
    },
    sessionToken: {
        baseName: "sessionToken",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SyntheticsBasicAuthSigv4Type",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBasicAuthSigv4.js.map