"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectedTeamRefData = void 0;
/**
 * Reference to connected external team.
 */
class ConnectedTeamRefData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ConnectedTeamRefData.attributeTypeMap;
    }
}
exports.ConnectedTeamRefData = ConnectedTeamRefData;
/**
 * @ignore
 */
ConnectedTeamRefData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ConnectedTeamRefDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ConnectedTeamRefData.js.map