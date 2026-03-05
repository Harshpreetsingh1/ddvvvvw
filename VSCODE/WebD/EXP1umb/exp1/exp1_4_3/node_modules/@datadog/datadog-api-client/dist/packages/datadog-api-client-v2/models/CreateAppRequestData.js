"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppRequestData = void 0;
/**
 * The data object containing the app definition.
 */
class CreateAppRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppRequestData.attributeTypeMap;
    }
}
exports.CreateAppRequestData = CreateAppRequestData;
/**
 * @ignore
 */
CreateAppRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateAppRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "AppDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateAppRequestData.js.map