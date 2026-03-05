"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStreamWidgetDefinition = void 0;
/**
 * The list stream visualization displays a table of recent events in your application that
 * match a search criteria using user-defined columns.
 */
class ListStreamWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListStreamWidgetDefinition.attributeTypeMap;
    }
}
exports.ListStreamWidgetDefinition = ListStreamWidgetDefinition;
/**
 * @ignore
 */
ListStreamWidgetDefinition.attributeTypeMap = {
    legendSize: {
        baseName: "legend_size",
        type: "string",
    },
    requests: {
        baseName: "requests",
        type: "[ListStreamWidgetRequest]",
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
        type: "ListStreamWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListStreamWidgetDefinition.js.map