"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardInvitesDataObject = void 0;
/**
 * Object containing the information for an invitation to a shared dashboard.
 */
class SharedDashboardInvitesDataObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardInvitesDataObject.attributeTypeMap;
    }
}
exports.SharedDashboardInvitesDataObject = SharedDashboardInvitesDataObject;
/**
 * @ignore
 */
SharedDashboardInvitesDataObject.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SharedDashboardInvitesDataObjectAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DashboardInviteType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboardInvitesDataObject.js.map