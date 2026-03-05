"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChartWidgetStacked = void 0;
/**
 * Bar chart widget stacked display options.
 */
class BarChartWidgetStacked {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BarChartWidgetStacked.attributeTypeMap;
    }
}
exports.BarChartWidgetStacked = BarChartWidgetStacked;
/**
 * @ignore
 */
BarChartWidgetStacked.attributeTypeMap = {
    legend: {
        baseName: "legend",
        type: "BarChartWidgetLegend",
    },
    type: {
        baseName: "type",
        type: "BarChartWidgetStackedType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BarChartWidgetStacked.js.map