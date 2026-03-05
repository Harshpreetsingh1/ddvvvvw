"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomFrameworkRequest = void 0;
/**
 * Request object to create a custom framework.
 */
class CreateCustomFrameworkRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateCustomFrameworkRequest.attributeTypeMap;
    }
}
exports.CreateCustomFrameworkRequest = CreateCustomFrameworkRequest;
/**
 * @ignore
 */
CreateCustomFrameworkRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomFrameworkData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateCustomFrameworkRequest.js.map