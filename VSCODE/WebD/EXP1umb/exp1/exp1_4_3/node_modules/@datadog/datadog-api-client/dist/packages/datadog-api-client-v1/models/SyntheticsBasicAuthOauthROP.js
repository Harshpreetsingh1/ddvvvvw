"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBasicAuthOauthROP = void 0;
/**
 * Object to handle `oauth rop` authentication when performing the test.
 */
class SyntheticsBasicAuthOauthROP {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBasicAuthOauthROP.attributeTypeMap;
    }
}
exports.SyntheticsBasicAuthOauthROP = SyntheticsBasicAuthOauthROP;
/**
 * @ignore
 */
SyntheticsBasicAuthOauthROP.attributeTypeMap = {
    accessTokenUrl: {
        baseName: "accessTokenUrl",
        type: "string",
        required: true,
    },
    audience: {
        baseName: "audience",
        type: "string",
    },
    clientId: {
        baseName: "clientId",
        type: "string",
    },
    clientSecret: {
        baseName: "clientSecret",
        type: "string",
    },
    password: {
        baseName: "password",
        type: "string",
        required: true,
    },
    resource: {
        baseName: "resource",
        type: "string",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    tokenApiAuthentication: {
        baseName: "tokenApiAuthentication",
        type: "SyntheticsBasicAuthOauthTokenApiAuthentication",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SyntheticsBasicAuthOauthROPType",
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
//# sourceMappingURL=SyntheticsBasicAuthOauthROP.js.map