"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetLegacyLiveSpan = void 0;
/**
 * Wrapper for live span
 */
class WidgetLegacyLiveSpan {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetLegacyLiveSpan.attributeTypeMap;
    }
}
exports.WidgetLegacyLiveSpan = WidgetLegacyLiveSpan;
/**
 * @ignore
 */
WidgetLegacyLiveSpan.attributeTypeMap = {
    hideIncompleteCostData: {
        baseName: "hide_incomplete_cost_data",
        type: "boolean",
    },
    liveSpan: {
        baseName: "live_span",
        type: "WidgetLiveSpan",
    },
};
//# sourceMappingURL=WidgetLegacyLiveSpan.js.map