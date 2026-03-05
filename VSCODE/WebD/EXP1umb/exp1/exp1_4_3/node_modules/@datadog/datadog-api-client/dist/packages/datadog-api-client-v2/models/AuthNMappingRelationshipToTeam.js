"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingRelationshipToTeam = void 0;
/**
 * Relationship of AuthN Mapping to a Team.
 */
class AuthNMappingRelationshipToTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingRelationshipToTeam.attributeTypeMap;
    }
}
exports.AuthNMappingRelationshipToTeam = AuthNMappingRelationshipToTeam;
/**
 * @ignore
 */
AuthNMappingRelationshipToTeam.attributeTypeMap = {
    team: {
        baseName: "team",
        type: "RelationshipToTeam",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingRelationshipToTeam.js.map