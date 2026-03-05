"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponentRequestDataAttributesComponentsItems = void 0;
class CreateComponentRequestDataAttributesComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateComponentRequestDataAttributesComponentsItems.attributeTypeMap;
    }
}
exports.CreateComponentRequestDataAttributesComponentsItems = CreateComponentRequestDataAttributesComponentsItems;
/**
 * @ignore
 */
CreateComponentRequestDataAttributesComponentsItems.attributeTypeMap = {
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
        type: "StatusPagesComponentGroupAttributesComponentsItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateComponentRequestDataAttributesComponentsItems.js.map