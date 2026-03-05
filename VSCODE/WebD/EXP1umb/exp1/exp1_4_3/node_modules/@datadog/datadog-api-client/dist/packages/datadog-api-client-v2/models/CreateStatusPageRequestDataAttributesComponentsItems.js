"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStatusPageRequestDataAttributesComponentsItems = void 0;
class CreateStatusPageRequestDataAttributesComponentsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateStatusPageRequestDataAttributesComponentsItems.attributeTypeMap;
    }
}
exports.CreateStatusPageRequestDataAttributesComponentsItems = CreateStatusPageRequestDataAttributesComponentsItems;
/**
 * @ignore
 */
CreateStatusPageRequestDataAttributesComponentsItems.attributeTypeMap = {
    components: {
        baseName: "components",
        type: "Array<CreateStatusPageRequestDataAttributesComponentsItemsComponentsItems>",
    },
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
        type: "CreateComponentRequestDataAttributesType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateStatusPageRequestDataAttributesComponentsItems.js.map