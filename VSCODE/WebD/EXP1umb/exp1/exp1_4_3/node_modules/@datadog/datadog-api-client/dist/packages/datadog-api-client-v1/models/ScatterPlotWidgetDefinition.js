"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScatterPlotWidgetDefinition = void 0;
/**
 * The scatter plot visualization allows you to graph a chosen scope over two different metrics with their respective aggregation.
 */
class ScatterPlotWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScatterPlotWidgetDefinition.attributeTypeMap;
    }
}
exports.ScatterPlotWidgetDefinition = ScatterPlotWidgetDefinition;
/**
 * @ignore
 */
ScatterPlotWidgetDefinition.attributeTypeMap = {
    colorByGroups: {
        baseName: "color_by_groups",
        type: "Array<string>",
    },
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    requests: {
        baseName: "requests",
        type: "ScatterPlotWidgetDefinitionRequests",
        required: true,
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
        type: "ScatterPlotWidgetDefinitionType",
        required: true,
    },
    xaxis: {
        baseName: "xaxis",
        type: "WidgetAxis",
    },
    yaxis: {
        baseName: "yaxis",
        type: "WidgetAxis",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScatterPlotWidgetDefinition.js.map