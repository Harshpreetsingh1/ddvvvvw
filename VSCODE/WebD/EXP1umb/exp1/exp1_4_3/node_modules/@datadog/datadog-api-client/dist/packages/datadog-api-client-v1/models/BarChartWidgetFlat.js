"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChartWidgetFlat = void 0;
/**
 * Bar chart widget flat display.
 */
class BarChartWidgetFlat {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BarChartWidgetFlat.attributeTypeMap;
    }
}
exports.BarChartWidgetFlat = BarChartWidgetFlat;
/**
 * @ignore
 */
BarChartWidgetFlat.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "BarChartWidgetFlatType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BarChartWidgetFlat.js.map