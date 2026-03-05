"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetFormulaLimit = void 0;
/**
 * Options for limiting results returned.
 */
class WidgetFormulaLimit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetFormulaLimit.attributeTypeMap;
    }
}
exports.WidgetFormulaLimit = WidgetFormulaLimit;
/**
 * @ignore
 */
WidgetFormulaLimit.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    order: {
        baseName: "order",
        type: "QuerySortOrder",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetFormulaLimit.js.map