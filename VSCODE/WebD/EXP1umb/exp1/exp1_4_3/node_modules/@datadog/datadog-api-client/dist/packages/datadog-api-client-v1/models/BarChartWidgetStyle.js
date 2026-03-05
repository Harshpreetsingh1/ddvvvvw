"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChartWidgetStyle = void 0;
/**
 * Style customization for a bar chart widget.
 */
class BarChartWidgetStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BarChartWidgetStyle.attributeTypeMap;
    }
}
exports.BarChartWidgetStyle = BarChartWidgetStyle;
/**
 * @ignore
 */
BarChartWidgetStyle.attributeTypeMap = {
    display: {
        baseName: "display",
        type: "BarChartWidgetDisplay",
    },
    palette: {
        baseName: "palette",
        type: "string",
    },
    scaling: {
        baseName: "scaling",
        type: "BarChartWidgetScaling",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BarChartWidgetStyle.js.map