"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedTeamRef = void 0;
/**
 * Reference to a team from an external system.
 */
class ConnectedTeamRef {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConnectedTeamRef.attributeTypeMap;
    }
}
exports.ConnectedTeamRef = ConnectedTeamRef;
/**
 * @ignore
 */
ConnectedTeamRef.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ConnectedTeamRefData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConnectedTeamRef.js.map