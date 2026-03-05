"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConnectionRequestData = void 0;
class CreateConnectionRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateConnectionRequestData.attributeTypeMap;
    }
}
exports.CreateConnectionRequestData = CreateConnectionRequestData;
/**
 * @ignore
 */
CreateConnectionRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateConnectionRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UpdateConnectionRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateConnectionRequestData.js.map