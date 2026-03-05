"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionWidgetDefinition = void 0;
/**
 * The Distribution visualization is another way of showing metrics
 * aggregated across one or several tags, such as hosts.
 * Unlike the heat map, a distribution graph’s x-axis is quantity rather than time.
 */
class DistributionWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DistributionWidgetDefinition.attributeTypeMap;
    }
}
exports.DistributionWidgetDefinition = DistributionWidgetDefinition;
/**
 * @ignore
 */
DistributionWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
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
        type: "[DistributionWidgetRequest]",
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
        type: "DistributionWidgetDefinitionType",
        required: true,
    },
    xaxis: {
        baseName: "xaxis",
        type: "DistributionWidgetXAxis",
    },
    yaxis: {
        baseName: "yaxis",
        type: "DistributionWidgetYAxis",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DistributionWidgetDefinition.js.map