"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetRequestStyle = void 0;
/**
 * Define request widget style.
 */
class WidgetRequestStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetRequestStyle.attributeTypeMap;
    }
}
exports.WidgetRequestStyle = WidgetRequestStyle;
/**
 * @ignore
 */
WidgetRequestStyle.attributeTypeMap = {
    lineType: {
        baseName: "line_type",
        type: "WidgetLineType",
    },
    lineWidth: {
        baseName: "line_width",
        type: "WidgetLineWidth",
    },
    orderBy: {
        baseName: "order_by",
        type: "WidgetStyleOrderBy",
    },
    palette: {
        baseName: "palette",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetRequestStyle.js.map