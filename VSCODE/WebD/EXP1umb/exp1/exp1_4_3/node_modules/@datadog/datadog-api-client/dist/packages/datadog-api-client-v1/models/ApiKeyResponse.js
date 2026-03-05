"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyResponse = void 0;
/**
 * An API key with its associated metadata.
 */
class ApiKeyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApiKeyResponse.attributeTypeMap;
    }
}
exports.ApiKeyResponse = ApiKeyResponse;
/**
 * @ignore
 */
ApiKeyResponse.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "ApiKey",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApiKeyResponse.js.map