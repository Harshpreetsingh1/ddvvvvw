"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyListResponse = void 0;
/**
 * List of API and application keys available for a given organization.
 */
class ApiKeyListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ApiKeyListResponse.attributeTypeMap;
    }
}
exports.ApiKeyListResponse = ApiKeyListResponse;
/**
 * @ignore
 */
ApiKeyListResponse.attributeTypeMap = {
    apiKeys: {
        baseName: "api_keys",
        type: "Array<ApiKey>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ApiKeyListResponse.js.map