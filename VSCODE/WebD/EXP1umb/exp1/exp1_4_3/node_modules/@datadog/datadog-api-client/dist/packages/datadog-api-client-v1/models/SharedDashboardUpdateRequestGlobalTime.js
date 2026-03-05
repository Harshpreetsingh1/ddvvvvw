"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedDashboardUpdateRequestGlobalTime = void 0;
/**
 * Timeframe setting for the shared dashboard.
 */
class SharedDashboardUpdateRequestGlobalTime {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SharedDashboardUpdateRequestGlobalTime.attributeTypeMap;
    }
}
exports.SharedDashboardUpdateRequestGlobalTime = SharedDashboardUpdateRequestGlobalTime;
/**
 * @ignore
 */
SharedDashboardUpdateRequestGlobalTime.attributeTypeMap = {
    liveSpan: {
        baseName: "live_span",
        type: "DashboardGlobalTimeLiveSpan",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SharedDashboardUpdateRequestGlobalTime.js.map