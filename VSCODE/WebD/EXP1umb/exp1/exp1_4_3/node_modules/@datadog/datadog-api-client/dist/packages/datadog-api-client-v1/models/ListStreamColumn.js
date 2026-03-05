"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListStreamColumn = void 0;
/**
 * Widget column.
 */
class ListStreamColumn {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListStreamColumn.attributeTypeMap;
    }
}
exports.ListStreamColumn = ListStreamColumn;
/**
 * @ignore
 */
ListStreamColumn.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
        required: true,
    },
    width: {
        baseName: "width",
        type: "ListStreamColumnWidth",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListStreamColumn.js.map