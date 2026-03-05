"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetConditionalFormat = void 0;
/**
 * Define a conditional format for the widget.
 */
class WidgetConditionalFormat {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetConditionalFormat.attributeTypeMap;
    }
}
exports.WidgetConditionalFormat = WidgetConditionalFormat;
/**
 * @ignore
 */
WidgetConditionalFormat.attributeTypeMap = {
    comparator: {
        baseName: "comparator",
        type: "WidgetComparator",
        required: true,
    },
    customBgColor: {
        baseName: "custom_bg_color",
        type: "string",
    },
    customFgColor: {
        baseName: "custom_fg_color",
        type: "string",
    },
    hideValue: {
        baseName: "hide_value",
        type: "boolean",
    },
    imageUrl: {
        baseName: "image_url",
        type: "string",
    },
    metric: {
        baseName: "metric",
        type: "string",
    },
    palette: {
        baseName: "palette",
        type: "WidgetPalette",
        required: true,
    },
    timeframe: {
        baseName: "timeframe",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetConditionalFormat.js.map