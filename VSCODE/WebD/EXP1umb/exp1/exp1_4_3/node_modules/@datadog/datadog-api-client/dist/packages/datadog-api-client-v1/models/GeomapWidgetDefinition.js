"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeomapWidgetDefinition = void 0;
/**
 * This visualization displays a series of values by country on a world map.
 */
class GeomapWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GeomapWidgetDefinition.attributeTypeMap;
    }
}
exports.GeomapWidgetDefinition = GeomapWidgetDefinition;
/**
 * @ignore
 */
GeomapWidgetDefinition.attributeTypeMap = {
    customLinks: {
        baseName: "custom_links",
        type: "Array<WidgetCustomLink>",
    },
    requests: {
        baseName: "requests",
        type: "Array<GeomapWidgetRequest>",
        required: true,
    },
    style: {
        baseName: "style",
        type: "GeomapWidgetDefinitionStyle",
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
        type: "GeomapWidgetDefinitionType",
        required: true,
    },
    view: {
        baseName: "view",
        type: "GeomapWidgetDefinitionView",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GeomapWidgetDefinition.js.map