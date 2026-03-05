"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingsResponse = void 0;
/**
 * Array of AuthN Mappings response.
 */
class AuthNMappingsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingsResponse.attributeTypeMap;
    }
}
exports.AuthNMappingsResponse = AuthNMappingsResponse;
/**
 * @ignore
 */
AuthNMappingsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<AuthNMapping>",
    },
    included: {
        baseName: "included",
        type: "Array<AuthNMappingIncluded>",
    },
    meta: {
        baseName: "meta",
        type: "ResponseMetaAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingsResponse.js.map