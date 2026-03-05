"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomFrameworkResponse = void 0;
/**
 * Response object to create a custom framework.
 */
class CreateCustomFrameworkResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateCustomFrameworkResponse.attributeTypeMap;
    }
}
exports.CreateCustomFrameworkResponse = CreateCustomFrameworkResponse;
/**
 * @ignore
 */
CreateCustomFrameworkResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FrameworkHandleAndVersionResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateCustomFrameworkResponse.js.map