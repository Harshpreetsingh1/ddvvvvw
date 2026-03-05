"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicAPIKey = void 0;
/**
 * The definition of the `AnthropicAPIKey` object.
 */
class AnthropicAPIKey {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AnthropicAPIKey.attributeTypeMap;
    }
}
exports.AnthropicAPIKey = AnthropicAPIKey;
/**
 * @ignore
 */
AnthropicAPIKey.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AnthropicAPIKeyType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AnthropicAPIKey.js.map