"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchDeleteRowsRequestArray = void 0;
/**
 * The request body for deleting multiple rows from a reference table.
 */
class BatchDeleteRowsRequestArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BatchDeleteRowsRequestArray.attributeTypeMap;
    }
}
exports.BatchDeleteRowsRequestArray = BatchDeleteRowsRequestArray;
/**
 * @ignore
 */
BatchDeleteRowsRequestArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<BatchDeleteRowsRequestData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BatchDeleteRowsRequestArray.js.map