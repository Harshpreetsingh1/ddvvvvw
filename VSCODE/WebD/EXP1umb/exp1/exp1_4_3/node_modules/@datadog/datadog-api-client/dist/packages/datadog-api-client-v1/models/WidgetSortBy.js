"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetSortBy = void 0;
/**
 * The controls for sorting the widget.
 */
class WidgetSortBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetSortBy.attributeTypeMap;
    }
}
exports.WidgetSortBy = WidgetSortBy;
/**
 * @ignore
 */
WidgetSortBy.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    orderBy: {
        baseName: "order_by",
        type: "Array<WidgetSortOrderBy>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetSortBy.js.map