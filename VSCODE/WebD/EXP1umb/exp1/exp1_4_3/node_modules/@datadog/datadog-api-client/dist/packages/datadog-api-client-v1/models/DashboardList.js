"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardList = void 0;
/**
 * Your Datadog Dashboards.
 */
class DashboardList {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardList.attributeTypeMap;
    }
}
exports.DashboardList = DashboardList;
/**
 * @ignore
 */
DashboardList.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "Creator",
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    dashboardCount: {
        baseName: "dashboard_count",
        type: "number",
        format: "int64",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    isFavorite: {
        baseName: "is_favorite",
        type: "boolean",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardList.js.map