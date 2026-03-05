"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetFieldSort = void 0;
/**
 * Which column and order to sort by
 */
class WidgetFieldSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetFieldSort.attributeTypeMap;
    }
}
exports.WidgetFieldSort = WidgetFieldSort;
/**
 * @ignore
 */
WidgetFieldSort.attributeTypeMap = {
    column: {
        baseName: "column",
        type: "string",
        required: true,
    },
    order: {
        baseName: "order",
        type: "WidgetSort",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetFieldSort.js.map