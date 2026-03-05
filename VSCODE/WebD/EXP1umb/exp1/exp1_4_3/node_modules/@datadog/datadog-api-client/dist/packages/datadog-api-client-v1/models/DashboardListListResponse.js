"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardListListResponse = void 0;
/**
 * Information on your dashboard lists.
 */
class DashboardListListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardListListResponse.attributeTypeMap;
    }
}
exports.DashboardListListResponse = DashboardListListResponse;
/**
 * @ignore
 */
DashboardListListResponse.attributeTypeMap = {
    dashboardLists: {
        baseName: "dashboard_lists",
        type: "Array<DashboardList>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardListListResponse.js.map