"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardGlobalTime = void 0;
/**
 * Object containing the live span selection for the dashboard.
 */
class DashboardGlobalTime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardGlobalTime.attributeTypeMap;
    }
}
exports.DashboardGlobalTime = DashboardGlobalTime;
/**
 * @ignore
 */
DashboardGlobalTime.attributeTypeMap = {
    liveSpan: {
        baseName: "live_span",
        type: "DashboardGlobalTimeLiveSpan",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardGlobalTime.js.map