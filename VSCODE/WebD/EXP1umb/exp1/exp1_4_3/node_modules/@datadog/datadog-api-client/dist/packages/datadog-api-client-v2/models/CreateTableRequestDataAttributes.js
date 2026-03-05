"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequestDataAttributes = void 0;
/**
 * Attributes that define the reference table's configuration and properties.
 */
class CreateTableRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateTableRequestDataAttributes = CreateTableRequestDataAttributes;
/**
 * @ignore
 */
CreateTableRequestDataAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    fileMetadata: {
        baseName: "file_metadata",
        type: "CreateTableRequestDataAttributesFileMetadata",
    },
    schema: {
        baseName: "schema",
        type: "CreateTableRequestDataAttributesSchema",
        required: true,
    },
    source: {
        baseName: "source",
        type: "ReferenceTableCreateSourceType",
        required: true,
    },
    tableName: {
        baseName: "table_name",
        type: "string",
        required: true,
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTableRequestDataAttributes.js.map