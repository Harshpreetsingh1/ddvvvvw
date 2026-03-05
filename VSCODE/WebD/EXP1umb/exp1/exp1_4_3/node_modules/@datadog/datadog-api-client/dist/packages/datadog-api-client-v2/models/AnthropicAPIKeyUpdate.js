"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropicAPIKeyUpdate = void 0;
/**
 * The definition of the `AnthropicAPIKey` object.
 */
class AnthropicAPIKeyUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AnthropicAPIKeyUpdate.attributeTypeMap;
    }
}
exports.AnthropicAPIKeyUpdate = AnthropicAPIKeyUpdate;
/**
 * @ignore
 */
AnthropicAPIKeyUpdate.attributeTypeMap = {
    apiToken: {
        baseName: "api_token",
        type: "string",
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
//# sourceMappingURL=AnthropicAPIKeyUpdate.js.map