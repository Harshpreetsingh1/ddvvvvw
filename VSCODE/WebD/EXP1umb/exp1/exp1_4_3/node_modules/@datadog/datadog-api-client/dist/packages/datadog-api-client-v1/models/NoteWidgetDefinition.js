"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteWidgetDefinition = void 0;
/**
 * The notes and links widget is similar to free text widget, but allows for more formatting options.
 */
class NoteWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NoteWidgetDefinition.attributeTypeMap;
    }
}
exports.NoteWidgetDefinition = NoteWidgetDefinition;
/**
 * @ignore
 */
NoteWidgetDefinition.attributeTypeMap = {
    backgroundColor: {
        baseName: "background_color",
        type: "string",
    },
    content: {
        baseName: "content",
        type: "string",
        required: true,
    },
    fontSize: {
        baseName: "font_size",
        type: "string",
    },
    hasPadding: {
        baseName: "has_padding",
        type: "boolean",
    },
    showTick: {
        baseName: "show_tick",
        type: "boolean",
    },
    textAlign: {
        baseName: "text_align",
        type: "WidgetTextAlign",
    },
    tickEdge: {
        baseName: "tick_edge",
        type: "WidgetTickEdge",
    },
    tickPos: {
        baseName: "tick_pos",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "NoteWidgetDefinitionType",
        required: true,
    },
    verticalAlign: {
        baseName: "vertical_align",
        type: "WidgetVerticalAlign",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NoteWidgetDefinition.js.map