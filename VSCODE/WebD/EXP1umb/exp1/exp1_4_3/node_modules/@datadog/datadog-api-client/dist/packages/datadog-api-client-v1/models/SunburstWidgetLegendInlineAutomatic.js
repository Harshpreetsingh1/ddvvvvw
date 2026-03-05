"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunburstWidgetLegendInlineAutomatic = void 0;
/**
 * Configuration of inline or automatic legends.
 */
class SunburstWidgetLegendInlineAutomatic {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SunburstWidgetLegendInlineAutomatic.attributeTypeMap;
    }
}
exports.SunburstWidgetLegendInlineAutomatic = SunburstWidgetLegendInlineAutomatic;
/**
 * @ignore
 */
SunburstWidgetLegendInlineAutomatic.attributeTypeMap = {
    hidePercent: {
        baseName: "hide_percent",
        type: "boolean",
    },
    hideValue: {
        baseName: "hide_value",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "SunburstWidgetLegendInlineAutomaticType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SunburstWidgetLegendInlineAutomatic.js.map