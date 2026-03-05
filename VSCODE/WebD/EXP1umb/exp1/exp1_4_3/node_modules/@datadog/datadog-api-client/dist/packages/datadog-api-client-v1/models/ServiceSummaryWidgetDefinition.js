"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceSummaryWidgetDefinition = void 0;
/**
 * The service summary displays the graphs of a chosen service in your screenboard. Only available on FREE layout dashboards.
 */
class ServiceSummaryWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ServiceSummaryWidgetDefinition.attributeTypeMap;
    }
}
exports.ServiceSummaryWidgetDefinition = ServiceSummaryWidgetDefinition;
/**
 * @ignore
 */
ServiceSummaryWidgetDefinition.attributeTypeMap = {
    displayFormat: {
        baseName: "display_format",
        type: "WidgetServiceSummaryDisplayFormat",
    },
    env: {
        baseName: "env",
        type: "string",
        required: true,
    },
    service: {
        baseName: "service",
        type: "string",
        required: true,
    },
    showBreakdown: {
        baseName: "show_breakdown",
        type: "boolean",
    },
    showDistribution: {
        baseName: "show_distribution",
        type: "boolean",
    },
    showErrors: {
        baseName: "show_errors",
        type: "boolean",
    },
    showHits: {
        baseName: "show_hits",
        type: "boolean",
    },
    showLatency: {
        baseName: "show_latency",
        type: "boolean",
    },
    showResourceList: {
        baseName: "show_resource_list",
        type: "boolean",
    },
    sizeFormat: {
        baseName: "size_format",
        type: "WidgetSizeFormat",
    },
    spanName: {
        baseName: "span_name",
        type: "string",
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
        type: "ServiceSummaryWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ServiceSummaryWidgetDefinition.js.map