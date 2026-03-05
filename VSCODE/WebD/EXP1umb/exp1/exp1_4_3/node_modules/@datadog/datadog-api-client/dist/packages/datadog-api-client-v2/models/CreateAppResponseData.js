"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAppResponseData = void 0;
/**
 * The data object containing the app ID.
 */
class CreateAppResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateAppResponseData.attributeTypeMap;
    }
}
exports.CreateAppResponseData = CreateAppResponseData;
/**
 * @ignore
 */
CreateAppResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=CreateAppResponseData.js.map