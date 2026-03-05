"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetNumberFormat = void 0;
/**
 * Number format options for the widget.
 */
class WidgetNumberFormat {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetNumberFormat.attributeTypeMap;
    }
}
exports.WidgetNumberFormat = WidgetNumberFormat;
/**
 * @ignore
 */
WidgetNumberFormat.attributeTypeMap = {
    unit: {
        baseName: "unit",
        type: "NumberFormatUnit",
    },
    unitScale: {
        baseName: "unit_scale",
        type: "NumberFormatUnitScale",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetNumberFormat.js.map