"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingCreateRequest = void 0;
/**
 * Request for creating an AuthN Mapping.
 */
class AuthNMappingCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingCreateRequest.attributeTypeMap;
    }
}
exports.AuthNMappingCreateRequest = AuthNMappingCreateRequest;
/**
 * @ignore
 */
AuthNMappingCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AuthNMappingCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingCreateRequest.js.map