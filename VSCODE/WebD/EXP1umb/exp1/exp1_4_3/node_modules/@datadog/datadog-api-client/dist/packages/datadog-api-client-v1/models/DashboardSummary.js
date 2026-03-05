"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardSummary = void 0;
/**
 * Dashboard summary response.
 */
class DashboardSummary {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardSummary.attributeTypeMap;
    }
}
exports.DashboardSummary = DashboardSummary;
/**
 * @ignore
 */
DashboardSummary.attributeTypeMap = {
    dashboards: {
        baseName: "dashboards",
        type: "Array<DashboardSummaryDefinition>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardSummary.js.map