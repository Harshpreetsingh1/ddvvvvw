"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTenancyConfigData = void 0;
class CreateTenancyConfigData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTenancyConfigData.attributeTypeMap;
    }
}
exports.CreateTenancyConfigData = CreateTenancyConfigData;
/**
 * @ignore
 */
CreateTenancyConfigData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateTenancyConfigDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UpdateTenancyConfigDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTenancyConfigData.js.map