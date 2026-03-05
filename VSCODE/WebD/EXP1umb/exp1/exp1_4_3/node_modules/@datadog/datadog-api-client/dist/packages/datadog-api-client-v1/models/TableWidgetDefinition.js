"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWidgetDefinition = void 0;
/**
 * The table visualization is available on timeboards and screenboards. It displays columns of metrics grouped by tag key.
 */
class TableWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableWidgetDefinition.attributeTypeMap;
    }
}
exports.TableWidgetDefinition = TableWidgetDefinition;
/**
 * @ignore
 */
TableWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    hasSearchBar: {
        baseName: "has_search_bar",
        type: "TableWidgetHasSearchBar",
    },
    requests: {
        baseName: "requests",
        type: "Array<TableWidgetRequest>",
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
        type: "TableWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableWidgetDefinition.js.map