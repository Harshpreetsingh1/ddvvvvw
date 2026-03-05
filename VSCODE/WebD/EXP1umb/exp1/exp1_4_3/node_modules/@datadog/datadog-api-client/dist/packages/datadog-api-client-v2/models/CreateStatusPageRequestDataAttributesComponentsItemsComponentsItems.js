"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems = void 0;
class CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems.attributeTypeMap;
    }
}
exports.CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems = CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems;
/**
 * @ignore
 */
CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        format: "uuid",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    position: {
        baseName: "position",
        type: "number",
        format: "int64",
    },
    status: {
        baseName: "status",
        type: "StatusPagesComponentGroupAttributesComponentsItemsStatus",
    },
    type: {
        baseName: "type",
        type: "StatusPagesComponentGroupAttributesComponentsItemsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems.js.map