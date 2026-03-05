"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboard = void 0;
/**
 * The metadata object associated with how a dashboard has been/will be shared.
 */
class SharedDashboard {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboard.attributeTypeMap;
    }
}
exports.SharedDashboard = SharedDashboard;
/**
 * @ignore
 */
SharedDashboard.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "SharedDashboardAuthor",
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    dashboardId: {
        baseName: "dashboard_id",
        type: "string",
        required: true,
    },
    dashboardType: {
        baseName: "dashboard_type",
        type: "DashboardType",
        required: true,
    },
    embeddableDomains: {
        baseName: "embeddable_domains",
        type: "Array<string>",
    },
    expiration: {
        baseName: "expiration",
        type: "Date",
        format: "date-time",
    },
    globalTime: {
        baseName: "global_time",
        type: "DashboardGlobalTime",
    },
    globalTimeSelectableEnabled: {
        baseName: "global_time_selectable_enabled",
        type: "boolean",
    },
    invitees: {
        baseName: "invitees",
        type: "Array<SharedDashboardInviteesItems>",
    },
    lastAccessed: {
        baseName: "last_accessed",
        type: "Date",
        format: "date-time",
    },
    publicUrl: {
        baseName: "public_url",
        type: "string",
    },
    selectableTemplateVars: {
        baseName: "selectable_template_vars",
        type: "Array<SelectableTemplateVariableItems>",
    },
    shareList: {
        baseName: "share_list",
        type: "Array<string>",
    },
    shareType: {
        baseName: "share_type",
        type: "DashboardShareType",
    },
    status: {
        baseName: "status",
        type: "SharedDashboardStatus",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    token: {
        baseName: "token",
        type: "string",
    },
    viewingPreferences: {
        baseName: "viewing_preferences",
        type: "ViewingPreferences",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboard.js.map