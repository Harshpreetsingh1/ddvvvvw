"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyResponse = void 0;
/**
 * Response for retrieving an API key.
 */
class APIKeyResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeyResponse.attributeTypeMap;
    }
}
exports.APIKeyResponse = APIKeyResponse;
/**
 * @ignore
 */
APIKeyResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FullAPIKey",
    },
    included: {
        baseName: "included",
        type: "Array<APIKeyResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeyResponse.js.map