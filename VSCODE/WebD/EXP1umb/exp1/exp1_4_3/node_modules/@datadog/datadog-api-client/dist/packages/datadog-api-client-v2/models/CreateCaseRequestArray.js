"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCaseRequestArray = void 0;
/**
 * List of requests to create cases for security findings.
 */
class CreateCaseRequestArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateCaseRequestArray.attributeTypeMap;
    }
}
exports.CreateCaseRequestArray = CreateCaseRequestArray;
/**
 * @ignore
 */
CreateCaseRequestArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CreateCaseRequestData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateCaseRequestArray.js.map