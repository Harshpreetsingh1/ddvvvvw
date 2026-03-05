"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesSchemaFieldsItems = void 0;
/**
 * A single field (column) in the reference table schema to be created.
 */
class CreateTableRequestDataAttributesSchemaFieldsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesSchemaFieldsItems.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesSchemaFieldsItems = CreateTableRequestDataAttributesSchemaFieldsItems;
/**
 * @ignore
 */
CreateTableRequestDataAttributesSchemaFieldsItems.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ReferenceTableSchemaFieldType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributesSchemaFieldsItems.js.map