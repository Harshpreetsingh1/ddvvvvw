"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupWidgetDefinition = void 0;
/**
 * The groups widget allows you to keep similar graphs together on your timeboard. Each group has a custom header, can hold one to many graphs, and is collapsible.
 */
class GroupWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GroupWidgetDefinition.attributeTypeMap;
    }
}
exports.GroupWidgetDefinition = GroupWidgetDefinition;
/**
 * @ignore
 */
GroupWidgetDefinition.attributeTypeMap = {
    backgroundColor: {
        baseName: "background_color",
        type: "string",
    },
    bannerImg: {
        baseName: "banner_img",
        type: "string",
    },
    layoutType: {
        baseName: "layout_type",
        type: "WidgetLayoutType",
        required: true,
    },
    showTitle: {
        baseName: "show_title",
        type: "boolean",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    titleAlign: {
        baseName: "title_align",
        type: "WidgetTextAlign",
    },
    type: {
        baseName: "type",
        type: "GroupWidgetDefinitionType",
        required: true,
    },
    widgets: {
        baseName: "widgets",
        type: "Array<Widget>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GroupWidgetDefinition.js.map