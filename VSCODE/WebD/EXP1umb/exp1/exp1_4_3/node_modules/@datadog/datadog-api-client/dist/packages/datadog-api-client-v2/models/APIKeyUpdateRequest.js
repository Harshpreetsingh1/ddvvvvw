"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKeyUpdateRequest = void 0;
/**
 * Request used to update an API key.
 */
class APIKeyUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return APIKeyUpdateRequest.attributeTypeMap;
    }
}
exports.APIKeyUpdateRequest = APIKeyUpdateRequest;
/**
 * @ignore
 */
APIKeyUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "APIKeyUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=APIKeyUpdateRequest.js.map