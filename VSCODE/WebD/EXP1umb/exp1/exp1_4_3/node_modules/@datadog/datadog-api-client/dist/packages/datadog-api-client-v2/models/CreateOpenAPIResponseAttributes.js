"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOpenAPIResponseAttributes = void 0;
/**
 * Attributes for `CreateOpenAPI`.
 */
class CreateOpenAPIResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateOpenAPIResponseAttributes.attributeTypeMap;
    }
}
exports.CreateOpenAPIResponseAttributes = CreateOpenAPIResponseAttributes;
/**
 * @ignore
 */
CreateOpenAPIResponseAttributes.attributeTypeMap = {
    failedEndpoints: {
        baseName: "failed_endpoints",
        type: "Array<OpenAPIEndpoint>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateOpenAPIResponseAttributes.js.map