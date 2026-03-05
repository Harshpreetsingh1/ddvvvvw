"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsanaAccessTokenUpdate = void 0;
/**
 * The definition of the `AsanaAccessToken` object.
 */
class AsanaAccessTokenUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AsanaAccessTokenUpdate.attributeTypeMap;
    }
}
exports.AsanaAccessTokenUpdate = AsanaAccessTokenUpdate;
/**
 * @ignore
 */
AsanaAccessTokenUpdate.attributeTypeMap = {
    accessToken: {
        baseName: "access_token",
        type: "string",
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
//# sourceMappingURL=AsanaAccessTokenUpdate.js.map