"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeatMapWidgetDefinition = void 0;
/**
 * The heat map visualization shows metrics aggregated across many tags, such as hosts. The more hosts that have a particular value, the darker that square is.
 */
class HeatMapWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HeatMapWidgetDefinition.attributeTypeMap;
    }
}
exports.HeatMapWidgetDefinition = HeatMapWidgetDefinition;
/**
 * @ignore
 */
HeatMapWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    events: {
        baseName: "events",
        type: "Array<WidgetEvent>",
    },
    legendSize: {
        baseName: "legend_size",
        type: "string",
    },
    markers: {
        baseName: "markers",
        type: "Array<WidgetMarker>",
    },
    requests: {
        baseName: "requests",
        type: "[HeatMapWidgetRequest]",
        required: true,
    },
    showLegend: {
        baseName: "show_legend",
        type: "boolean",
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
        type: "HeatMapWidgetDefinitionType",
        required: true,
    },
    xaxis: {
        baseName: "xaxis",
        type: "HeatMapWidgetXAxis",
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
//# sourceMappingURL=HeatMapWidgetDefinition.js.map