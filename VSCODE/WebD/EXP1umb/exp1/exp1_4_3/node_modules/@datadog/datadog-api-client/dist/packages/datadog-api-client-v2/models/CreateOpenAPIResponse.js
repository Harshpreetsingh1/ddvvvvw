"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpenAPIResponse = void 0;
/**
 * Response for `CreateOpenAPI` operation.
 */
class CreateOpenAPIResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateOpenAPIResponse.attributeTypeMap;
    }
}
exports.CreateOpenAPIResponse = CreateOpenAPIResponse;
/**
 * @ignore
 */
CreateOpenAPIResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateOpenAPIResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateOpenAPIResponse.js.map