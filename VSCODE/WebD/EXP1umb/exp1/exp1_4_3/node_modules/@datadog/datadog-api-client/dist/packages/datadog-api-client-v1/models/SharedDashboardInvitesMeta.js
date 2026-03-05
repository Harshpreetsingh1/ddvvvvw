"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardInvitesMeta = void 0;
/**
 * Pagination metadata returned by the API.
 */
class SharedDashboardInvitesMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardInvitesMeta.attributeTypeMap;
    }
}
exports.SharedDashboardInvitesMeta = SharedDashboardInvitesMeta;
/**
 * @ignore
 */
SharedDashboardInvitesMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "SharedDashboardInvitesMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboardInvitesMeta.js.map