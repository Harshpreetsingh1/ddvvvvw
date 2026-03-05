"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchDeleteRowsRequestData = void 0;
/**
 * Row resource containing a single row identifier for deletion.
 */
class BatchDeleteRowsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BatchDeleteRowsRequestData.attributeTypeMap;
    }
}
exports.BatchDeleteRowsRequestData = BatchDeleteRowsRequestData;
/**
 * @ignore
 */
BatchDeleteRowsRequestData.attributeTypeMap = {
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
//# sourceMappingURL=BatchDeleteRowsRequestData.js.map