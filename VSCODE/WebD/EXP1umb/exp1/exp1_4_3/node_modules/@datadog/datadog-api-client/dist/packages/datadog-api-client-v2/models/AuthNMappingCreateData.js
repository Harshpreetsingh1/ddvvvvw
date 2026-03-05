"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingCreateData = void 0;
/**
 * Data for creating an AuthN Mapping.
 */
class AuthNMappingCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingCreateData.attributeTypeMap;
    }
}
exports.AuthNMappingCreateData = AuthNMappingCreateData;
/**
 * @ignore
 */
AuthNMappingCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AuthNMappingCreateAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "AuthNMappingCreateRelationships",
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
//# sourceMappingURL=AuthNMappingCreateData.js.map