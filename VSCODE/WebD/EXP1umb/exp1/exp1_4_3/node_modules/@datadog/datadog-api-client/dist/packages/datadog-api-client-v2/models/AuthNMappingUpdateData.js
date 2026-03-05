"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingUpdateData = void 0;
/**
 * Data for updating an AuthN Mapping.
 */
class AuthNMappingUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingUpdateData.attributeTypeMap;
    }
}
exports.AuthNMappingUpdateData = AuthNMappingUpdateData;
/**
 * @ignore
 */
AuthNMappingUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AuthNMappingUpdateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "AuthNMappingUpdateRelationships",
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
//# sourceMappingURL=AuthNMappingUpdateData.js.map