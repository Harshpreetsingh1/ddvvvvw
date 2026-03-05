"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BarChartWidgetDefinition = void 0;
/**
 * The bar chart visualization displays categorical data using vertical bars, allowing you to compare values across different groups.
 */
class BarChartWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BarChartWidgetDefinition.attributeTypeMap;
    }
}
exports.BarChartWidgetDefinition = BarChartWidgetDefinition;
/**
 * @ignore
 */
BarChartWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    requests: {
        baseName: "requests",
        type: "[BarChartWidgetRequest]",
        required: true,
    },
    style: {
        baseName: "style",
        type: "BarChartWidgetStyle",
    },
    time: {
        baseName: "time",
        type: "WidgetTime",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    titleAlign: {
        baseName: "title_align",
        type: "WidgetTextAlign",
    },
    titleSize: {
        baseName: "title_size",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "BarChartWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BarChartWidgetDefinition.js.map