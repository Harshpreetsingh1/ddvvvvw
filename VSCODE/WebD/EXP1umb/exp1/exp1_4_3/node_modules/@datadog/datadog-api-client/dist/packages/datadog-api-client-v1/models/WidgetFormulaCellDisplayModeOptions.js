"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetFormulaCellDisplayModeOptions = void 0;
/**
 * Cell display mode options for the widget formula. (only if `cell_display_mode` is set to `trend`).
 */
class WidgetFormulaCellDisplayModeOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetFormulaCellDisplayModeOptions.attributeTypeMap;
    }
}
exports.WidgetFormulaCellDisplayModeOptions = WidgetFormulaCellDisplayModeOptions;
/**
 * @ignore
 */
WidgetFormulaCellDisplayModeOptions.attributeTypeMap = {
    trendType: {
        baseName: "trend_type",
        type: "WidgetFormulaCellDisplayModeOptionsTrendType",
    },
    yScale: {
        baseName: "y_scale",
        type: "WidgetFormulaCellDisplayModeOptionsYScale",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetFormulaCellDisplayModeOptions.js.map