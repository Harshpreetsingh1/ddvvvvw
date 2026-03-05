"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributesSchema = void 0;
/**
 * Schema defining the structure and columns of the reference table.
 */
class CreateTableRequestDataAttributesSchema {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributesSchema.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributesSchema = CreateTableRequestDataAttributesSchema;
/**
 * @ignore
 */
CreateTableRequestDataAttributesSchema.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<CreateTableRequestDataAttributesSchemaFieldsItems>",
        required: true,
    },
    primaryKeys: {
        baseName: "primary_keys",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributesSchema.js.map