"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageWidgetDefinition = void 0;
/**
 * The image widget allows you to embed an image on your dashboard. An image can be a PNG, JPG, or animated GIF. Only available on FREE layout dashboards.
 */
class ImageWidgetDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ImageWidgetDefinition.attributeTypeMap;
    }
}
exports.ImageWidgetDefinition = ImageWidgetDefinition;
/**
 * @ignore
 */
ImageWidgetDefinition.attributeTypeMap = {
    hasBackground: {
        baseName: "has_background",
        type: "boolean",
    },
    hasBorder: {
        baseName: "has_border",
        type: "boolean",
    },
    horizontalAlign: {
        baseName: "horizontal_align",
        type: "WidgetHorizontalAlign",
    },
    margin: {
        baseName: "margin",
        type: "WidgetMargin",
    },
    sizing: {
        baseName: "sizing",
        type: "WidgetImageSizing",
    },
    type: {
        baseName: "type",
        type: "ImageWidgetDefinitionType",
        required: true,
    },
    url: {
        baseName: "url",
        type: "string",
        required: true,
    },
    urlDarkTheme: {
        baseName: "url_dark_theme",
        type: "string",
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
//# sourceMappingURL=ImageWidgetDefinition.js.map