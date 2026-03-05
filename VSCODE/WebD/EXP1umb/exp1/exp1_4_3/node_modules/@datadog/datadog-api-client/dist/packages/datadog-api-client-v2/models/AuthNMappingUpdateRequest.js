"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingUpdateRequest = void 0;
/**
 * Request to update an AuthN Mapping.
 */
class AuthNMappingUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingUpdateRequest.attributeTypeMap;
    }
}
exports.AuthNMappingUpdateRequest = AuthNMappingUpdateRequest;
/**
 * @ignore
 */
AuthNMappingUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AuthNMappingUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingUpdateRequest.js.map