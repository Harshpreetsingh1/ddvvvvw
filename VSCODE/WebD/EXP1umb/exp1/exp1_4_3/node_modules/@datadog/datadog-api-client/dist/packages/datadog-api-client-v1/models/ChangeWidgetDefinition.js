"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeWidgetDefinition = void 0;
/**
 * The Change graph shows you the change in a value over the time period chosen.
 */
class ChangeWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeWidgetDefinition.attributeTypeMap;
    }
}
exports.ChangeWidgetDefinition = ChangeWidgetDefinition;
/**
 * @ignore
 */
ChangeWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    requests: {
        baseName: "requests",
        type: "[ChangeWidgetRequest]",
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
        type: "ChangeWidgetDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeWidgetDefinition.js.map