"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetFormulaSort = void 0;
/**
 * The formula to sort the widget by.
 */
class WidgetFormulaSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetFormulaSort.attributeTypeMap;
    }
}
exports.WidgetFormulaSort = WidgetFormulaSort;
/**
 * @ignore
 */
WidgetFormulaSort.attributeTypeMap = {
    index: {
        baseName: "index",
        type: "number",
        required: true,
        format: "int64",
    },
    order: {
        baseName: "order",
        type: "WidgetSort",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FormulaType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetFormulaSort.js.map