"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpenAPIResponseData = void 0;
/**
 * Data envelope for `CreateOpenAPIResponse`.
 */
class CreateOpenAPIResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateOpenAPIResponseData.attributeTypeMap;
    }
}
exports.CreateOpenAPIResponseData = CreateOpenAPIResponseData;
/**
 * @ignore
 */
CreateOpenAPIResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateOpenAPIResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateOpenAPIResponseData.js.map