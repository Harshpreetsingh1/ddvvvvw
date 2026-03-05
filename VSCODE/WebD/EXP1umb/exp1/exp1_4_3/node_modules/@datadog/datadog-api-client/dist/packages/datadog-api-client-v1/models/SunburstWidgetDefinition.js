"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SunburstWidgetDefinition = void 0;
/**
 * Sunbursts are spot on to highlight how groups contribute to the total of a query.
 */
class SunburstWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SunburstWidgetDefinition.attributeTypeMap;
    }
}
exports.SunburstWidgetDefinition = SunburstWidgetDefinition;
/**
 * @ignore
 */
SunburstWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    hideTotal: {
        baseName: "hide_total",
        type: "boolean",
    },
    legend: {
        baseName: "legend",
        type: "SunburstWidgetLegend",
    },
    requests: {
        baseName: "requests",
        type: "Array<SunburstWidgetRequest>",
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
        type: "SunburstWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SunburstWidgetDefinition.js.map