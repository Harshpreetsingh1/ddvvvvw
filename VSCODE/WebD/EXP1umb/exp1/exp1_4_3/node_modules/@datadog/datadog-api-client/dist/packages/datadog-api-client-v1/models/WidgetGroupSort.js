"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WidgetGroupSort = void 0;
/**
 * The group to sort the widget by.
 */
class WidgetGroupSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WidgetGroupSort.attributeTypeMap;
    }
}
exports.WidgetGroupSort = WidgetGroupSort;
/**
 * @ignore
 */
WidgetGroupSort.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    order: {
        baseName: "order",
        type: "WidgetSort",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GroupType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WidgetGroupSort.js.map