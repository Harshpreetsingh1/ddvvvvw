"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingRelationshipToRole = void 0;
/**
 * Relationship of AuthN Mapping to a Role.
 */
class AuthNMappingRelationshipToRole {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingRelationshipToRole.attributeTypeMap;
    }
}
exports.AuthNMappingRelationshipToRole = AuthNMappingRelationshipToRole;
/**
 * @ignore
 */
AuthNMappingRelationshipToRole.attributeTypeMap = {
    role: {
        baseName: "role",
        type: "RelationshipToRole",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingRelationshipToRole.js.map