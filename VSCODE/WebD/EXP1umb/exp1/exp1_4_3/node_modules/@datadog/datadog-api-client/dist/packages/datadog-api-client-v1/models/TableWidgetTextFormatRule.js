"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableWidgetTextFormatRule = void 0;
/**
 * Text format rules.
 */
class TableWidgetTextFormatRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableWidgetTextFormatRule.attributeTypeMap;
    }
}
exports.TableWidgetTextFormatRule = TableWidgetTextFormatRule;
/**
 * @ignore
 */
TableWidgetTextFormatRule.attributeTypeMap = {
    customBgColor: {
        baseName: "custom_bg_color",
        type: "string",
    },
    customFgColor: {
        baseName: "custom_fg_color",
        type: "string",
    },
    match: {
        baseName: "match",
        type: "TableWidgetTextFormatMatch",
        required: true,
    },
    palette: {
        baseName: "palette",
        type: "TableWidgetTextFormatPalette",
    },
    replace: {
        baseName: "replace",
        type: "TableWidgetTextFormatReplace",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableWidgetTextFormatRule.js.map