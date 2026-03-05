"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsBasicAuthOauthClient = void 0;
/**
 * Object to handle `oauth client` authentication when performing the test.
 */
class SyntheticsBasicAuthOauthClient {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsBasicAuthOauthClient.attributeTypeMap;
    }
}
exports.SyntheticsBasicAuthOauthClient = SyntheticsBasicAuthOauthClient;
/**
 * @ignore
 */
SyntheticsBasicAuthOauthClient.attributeTypeMap = {
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
        required: true,
    },
    clientSecret: {
        baseName: "clientSecret",
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
        type: "SyntheticsBasicAuthOauthClientType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsBasicAuthOauthClient.js.map