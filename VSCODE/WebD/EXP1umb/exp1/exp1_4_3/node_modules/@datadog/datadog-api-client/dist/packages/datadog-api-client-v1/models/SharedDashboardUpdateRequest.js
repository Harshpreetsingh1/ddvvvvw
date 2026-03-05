"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardUpdateRequest = void 0;
/**
 * Update a shared dashboard's settings.
 */
class SharedDashboardUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardUpdateRequest.attributeTypeMap;
    }
}
exports.SharedDashboardUpdateRequest = SharedDashboardUpdateRequest;
/**
 * @ignore
 */
SharedDashboardUpdateRequest.attributeTypeMap = {
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
        type: "SharedDashboardUpdateRequestGlobalTime",
    },
    globalTimeSelectableEnabled: {
        baseName: "global_time_selectable_enabled",
        type: "boolean",
    },
    invitees: {
        baseName: "invitees",
        type: "Array<SharedDashboardInviteesItems>",
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
    viewingPreferences: {
        baseName: "viewing_preferences",
        type: "ViewingPreferences",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboardUpdateRequest.js.map