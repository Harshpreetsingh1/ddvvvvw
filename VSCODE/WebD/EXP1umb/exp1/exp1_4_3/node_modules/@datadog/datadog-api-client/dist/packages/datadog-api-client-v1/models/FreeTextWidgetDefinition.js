"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreeTextWidgetDefinition = void 0;
/**
 * Free text is a widget that allows you to add headings to your screenboard. Commonly used to state the overall purpose of the dashboard. Only available on FREE layout dashboards.
 */
class FreeTextWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FreeTextWidgetDefinition.attributeTypeMap;
    }
}
exports.FreeTextWidgetDefinition = FreeTextWidgetDefinition;
/**
 * @ignore
 */
FreeTextWidgetDefinition.attributeTypeMap = {
    color: {
        baseName: "color",
        type: "string",
    },
    fontSize: {
        baseName: "font_size",
        type: "string",
    },
    text: {
        baseName: "text",
        type: "string",
        required: true,
    },
    textAlign: {
        baseName: "text_align",
        type: "WidgetTextAlign",
    },
    type: {
        baseName: "type",
        type: "FreeTextWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FreeTextWidgetDefinition.js.map