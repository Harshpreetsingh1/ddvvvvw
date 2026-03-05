"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingResponse = void 0;
/**
 * AuthN Mapping response from the API.
 */
class AuthNMappingResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingResponse.attributeTypeMap;
    }
}
exports.AuthNMappingResponse = AuthNMappingResponse;
/**
 * @ignore
 */
AuthNMappingResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "AuthNMapping",
    },
    included: {
        baseName: "included",
        type: "Array<AuthNMappingIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingResponse.js.map