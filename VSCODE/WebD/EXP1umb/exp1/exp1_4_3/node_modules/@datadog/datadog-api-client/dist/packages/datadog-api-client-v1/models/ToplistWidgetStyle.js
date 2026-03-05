"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToplistWidgetStyle = void 0;
/**
 * Style customization for a top list widget.
 */
class ToplistWidgetStyle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ToplistWidgetStyle.attributeTypeMap;
    }
}
exports.ToplistWidgetStyle = ToplistWidgetStyle;
/**
 * @ignore
 */
ToplistWidgetStyle.attributeTypeMap = {
    display: {
        baseName: "display",
        type: "ToplistWidgetDisplay",
    },
    palette: {
        baseName: "palette",
        type: "string",
    },
    scaling: {
        baseName: "scaling",
        type: "ToplistWidgetScaling",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ToplistWidgetStyle.js.map