"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConnectionRequestDataAttributes = void 0;
class CreateConnectionRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateConnectionRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateConnectionRequestDataAttributes = CreateConnectionRequestDataAttributes;
/**
 * @ignore
 */
CreateConnectionRequestDataAttributes.attributeTypeMap = {
    fields: {
        baseName: "fields",
        type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    joinAttribute: {
        baseName: "join_attribute",
        type: "string",
        required: true,
    },
    joinType: {
        baseName: "join_type",
        type: "string",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "{ [key: string]: string; }",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateConnectionRequestDataAttributes.js.map