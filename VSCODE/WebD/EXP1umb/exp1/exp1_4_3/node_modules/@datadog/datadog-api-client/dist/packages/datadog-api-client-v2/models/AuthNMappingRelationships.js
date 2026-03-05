"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingRelationships = void 0;
/**
 * All relationships associated with AuthN Mapping.
 */
class AuthNMappingRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingRelationships.attributeTypeMap;
    }
}
exports.AuthNMappingRelationships = AuthNMappingRelationships;
/**
 * @ignore
 */
AuthNMappingRelationships.attributeTypeMap = {
    role: {
        baseName: "role",
        type: "RelationshipToRole",
    },
    samlAssertionAttribute: {
        baseName: "saml_assertion_attribute",
        type: "RelationshipToSAMLAssertionAttribute",
    },
    team: {
        baseName: "team",
        type: "RelationshipToTeam",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingRelationships.js.map