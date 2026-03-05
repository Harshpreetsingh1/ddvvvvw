"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryValueWidgetDefinition = void 0;
/**
 * Query values display the current value of a given metric, APM, or log query.
 */
class QueryValueWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return QueryValueWidgetDefinition.attributeTypeMap;
    }
}
exports.QueryValueWidgetDefinition = QueryValueWidgetDefinition;
/**
 * @ignore
 */
QueryValueWidgetDefinition.attributeTypeMap = {
    autoscale: {
        baseName: "autoscale",
        type: "boolean",
    },
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    customUnit: {
        baseName: "custom_unit",
        type: "string",
    },
    precision: {
        baseName: "precision",
        type: "number",
        format: "int64",
    },
    requests: {
        baseName: "requests",
        type: "[QueryValueWidgetRequest]",
        required: true,
    },
    textAlign: {
        baseName: "text_align",
        type: "WidgetTextAlign",
    },
    time: {
        baseName: "time",
        type: "WidgetTime",
    },
    timeseriesBackground: {
        baseName: "timeseries_background",
        type: "TimeseriesBackground",
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
        type: "QueryValueWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=QueryValueWidgetDefinition.js.map