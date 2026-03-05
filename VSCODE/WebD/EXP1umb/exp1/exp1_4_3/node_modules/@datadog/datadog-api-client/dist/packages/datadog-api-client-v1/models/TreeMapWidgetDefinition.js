"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeMapWidgetDefinition = void 0;
/**
 * The treemap visualization enables you to display hierarchical and nested data. It is well suited for queries that describe part-whole relationships, such as resource usage by availability zone, data center, or team.
 */
class TreeMapWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TreeMapWidgetDefinition.attributeTypeMap;
    }
}
exports.TreeMapWidgetDefinition = TreeMapWidgetDefinition;
/**
 * @ignore
 */
TreeMapWidgetDefinition.attributeTypeMap = {
    colorBy: {
        baseName: "color_by",
        type: "TreeMapColorBy",
    },
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    groupBy: {
        baseName: "group_by",
        type: "TreeMapGroupBy",
    },
    requests: {
        baseName: "requests",
        type: "[TreeMapWidgetRequest]",
        required: true,
    },
    sizeBy: {
        baseName: "size_by",
        type: "TreeMapSizeBy",
    },
    time: {
        baseName: "time",
        type: "WidgetTime",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TreeMapWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TreeMapWidgetDefinition.js.map