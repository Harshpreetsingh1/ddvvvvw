"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpsertRowsRequestArray = void 0;
/**
 * The request body for creating or updating multiple rows into a reference table.
 */
class BatchUpsertRowsRequestArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BatchUpsertRowsRequestArray.attributeTypeMap;
    }
}
exports.BatchUpsertRowsRequestArray = BatchUpsertRowsRequestArray;
/**
 * @ignore
 */
BatchUpsertRowsRequestArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<BatchUpsertRowsRequestData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BatchUpsertRowsRequestArray.js.map