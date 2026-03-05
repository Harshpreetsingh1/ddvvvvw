"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsanaAccessToken = void 0;
/**
 * The definition of the `AsanaAccessToken` object.
 */
class AsanaAccessToken {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AsanaAccessToken.attributeTypeMap;
    }
}
exports.AsanaAccessToken = AsanaAccessToken;
/**
 * @ignore
 */
AsanaAccessToken.attributeTypeMap = {
    accessToken: {
        baseName: "access_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AsanaAccessTokenType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AsanaAccessToken.js.map