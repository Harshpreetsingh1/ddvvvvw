"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardInvites = void 0;
/**
 * Invitations data and metadata that exists for a shared dashboard returned by the API.
 */
class SharedDashboardInvites {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardInvites.attributeTypeMap;
    }
}
exports.SharedDashboardInvites = SharedDashboardInvites;
/**
 * @ignore
 */
SharedDashboardInvites.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SharedDashboardInvitesData",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "SharedDashboardInvitesMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboardInvites.js.map