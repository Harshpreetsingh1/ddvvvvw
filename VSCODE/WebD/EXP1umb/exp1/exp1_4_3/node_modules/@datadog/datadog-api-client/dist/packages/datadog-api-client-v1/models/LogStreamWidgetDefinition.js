"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogStreamWidgetDefinition = void 0;
/**
 * The Log Stream displays a log flow matching the defined query. Only available on FREE layout dashboards.
 */
class LogStreamWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogStreamWidgetDefinition.attributeTypeMap;
    }
}
exports.LogStreamWidgetDefinition = LogStreamWidgetDefinition;
/**
 * @ignore
 */
LogStreamWidgetDefinition.attributeTypeMap = {
    columns: {
        baseName: "columns",
        type: "Array<string>",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    logset: {
        baseName: "logset",
        type: "string",
    },
    messageDisplay: {
        baseName: "message_display",
        type: "WidgetMessageDisplay",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    showDateColumn: {
        baseName: "show_date_column",
        type: "boolean",
    },
    showMessageColumn: {
        baseName: "show_message_column",
        type: "boolean",
    },
    sort: {
        baseName: "sort",
        type: "WidgetFieldSort",
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
        type: "LogStreamWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogStreamWidgetDefinition.js.map