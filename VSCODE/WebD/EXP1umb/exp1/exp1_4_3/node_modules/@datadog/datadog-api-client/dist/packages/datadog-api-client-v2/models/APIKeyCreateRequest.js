"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyCreateRequest = void 0;
/**
 * Request used to create an API key.
 */
class APIKeyCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeyCreateRequest.attributeTypeMap;
    }
}
exports.APIKeyCreateRequest = APIKeyCreateRequest;
/**
 * @ignore
 */
APIKeyCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "APIKeyCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeyCreateRequest.js.map