"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentRequestDataAttributes = void 0;
/**
 * The supported attributes for creating a component.
 */
class CreateComponentRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateComponentRequestDataAttributes.attributeTypeMap;
    }
}
exports.CreateComponentRequestDataAttributes = CreateComponentRequestDataAttributes;
/**
 * @ignore
 */
CreateComponentRequestDataAttributes.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<CreateComponentRequestDataAttributesComponentsItems>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    position: {
        baseName: "position",
        type: "number",
        required: true,
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "CreateComponentRequestDataAttributesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateComponentRequestDataAttributes.js.map