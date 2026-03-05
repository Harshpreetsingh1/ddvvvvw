"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthNMappingTeam = void 0;
/**
 * Team.
 */
class AuthNMappingTeam {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AuthNMappingTeam.attributeTypeMap;
    }
}
exports.AuthNMappingTeam = AuthNMappingTeam;
/**
 * @ignore
 */
AuthNMappingTeam.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "AuthNMappingTeamAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TeamType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AuthNMappingTeam.js.map