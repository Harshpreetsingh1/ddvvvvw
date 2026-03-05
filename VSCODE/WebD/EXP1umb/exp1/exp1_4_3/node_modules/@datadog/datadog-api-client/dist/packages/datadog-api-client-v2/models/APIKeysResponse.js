"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeysResponse = void 0;
/**
 * Response for a list of API keys.
 */
class APIKeysResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeysResponse.attributeTypeMap;
    }
}
exports.APIKeysResponse = APIKeysResponse;
/**
 * @ignore
 */
APIKeysResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PartialAPIKey>",
    },
    included: {
        baseName: "included",
        type: "Array<APIKeyResponseIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "APIKeysResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeysResponse.js.map