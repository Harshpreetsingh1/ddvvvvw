"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetFormula = void 0;
/**
 * Formula to be used in a widget query.
 */
class WidgetFormula {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetFormula.attributeTypeMap;
    }
}
exports.WidgetFormula = WidgetFormula;
/**
 * @ignore
 */
WidgetFormula.attributeTypeMap = {
    alias: {
        baseName: "alias",
        type: "string",
    },
    cellDisplayMode: {
        baseName: "cell_display_mode",
        type: "TableWidgetCellDisplayMode",
    },
    cellDisplayModeOptions: {
        baseName: "cell_display_mode_options",
        type: "WidgetFormulaCellDisplayModeOptions",
    },
    conditionalFormats: {
        baseName: "conditional_formats",
        type: "Array<WidgetConditionalFormat>",
    },
    formula: {
        baseName: "formula",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "WidgetFormulaLimit",
    },
    numberFormat: {
        baseName: "number_format",
        type: "WidgetNumberFormat",
    },
    style: {
        baseName: "style",
        type: "WidgetFormulaStyle",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetFormula.js.map