"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMapping = void 0;
/**
 * The AuthN Mapping object returned by API.
 */
class AuthNMapping {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMapping.attributeTypeMap;
    }
}
exports.AuthNMapping = AuthNMapping;
/**
 * @ignore
 */
AuthNMapping.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AuthNMappingAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "AuthNMappingRelationships",
    },
    type: {
        baseName: "type",
        type: "AuthNMappingsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMapping.js.map