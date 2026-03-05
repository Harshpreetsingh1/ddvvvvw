"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeseriesWidgetDefinition = void 0;
/**
 * The timeseries visualization allows you to display the evolution of one or more metrics, log events, or Indexed Spans over time.
 */
class TimeseriesWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeseriesWidgetDefinition.attributeTypeMap;
    }
}
exports.TimeseriesWidgetDefinition = TimeseriesWidgetDefinition;
/**
 * @ignore
 */
TimeseriesWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    events: {
        baseName: "events",
        type: "Array<WidgetEvent>",
    },
    legendColumns: {
        baseName: "legend_columns",
        type: "Array<TimeseriesWidgetLegendColumn>",
    },
    legendLayout: {
        baseName: "legend_layout",
        type: "TimeseriesWidgetLegendLayout",
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
        type: "Array<TimeseriesWidgetRequest>",
        required: true,
    },
    rightYaxis: {
        baseName: "right_yaxis",
        type: "WidgetAxis",
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
        type: "TimeseriesWidgetDefinitionType",
        required: true,
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
//# sourceMappingURL=TimeseriesWidgetDefinition.js.map