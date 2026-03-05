"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddMemberTeamRequest = void 0;
/**
 * Request to add a member team to super team's hierarchy
 */
class AddMemberTeamRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AddMemberTeamRequest.attributeTypeMap;
    }
}
exports.AddMemberTeamRequest = AddMemberTeamRequest;
/**
 * @ignore
 */
AddMemberTeamRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MemberTeam",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=AddMemberTeamRequest.js.map