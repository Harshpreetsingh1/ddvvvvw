"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchUpsertRowsRequestDataAttributes = void 0;
/**
 * Attributes containing row data values for row creation or update operations.
 */
class BatchUpsertRowsRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return BatchUpsertRowsRequestDataAttributes.attributeTypeMap;
    }
}
exports.BatchUpsertRowsRequestDataAttributes = BatchUpsertRowsRequestDataAttributes;
/**
 * @ignore
 */
BatchUpsertRowsRequestDataAttributes.attributeTypeMap = {
    values: {
        baseName: "values",
        type: "{ [key: string]: BatchUpsertRowsRequestDataAttributesValue; }",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=BatchUpsertRowsRequestDataAttributes.js.map