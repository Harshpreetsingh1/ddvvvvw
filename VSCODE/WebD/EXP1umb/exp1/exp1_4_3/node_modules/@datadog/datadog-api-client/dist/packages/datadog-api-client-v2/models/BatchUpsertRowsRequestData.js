"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpsertRowsRequestData = void 0;
/**
 * Row resource containing a single row identifier and its column values.
 */
class BatchUpsertRowsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BatchUpsertRowsRequestData.attributeTypeMap;
    }
}
exports.BatchUpsertRowsRequestData = BatchUpsertRowsRequestData;
/**
 * @ignore
 */
BatchUpsertRowsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "BatchUpsertRowsRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TableRowResourceDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BatchUpsertRowsRequestData.js.map