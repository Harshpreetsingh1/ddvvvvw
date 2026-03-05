"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePageResponseData = void 0;
/**
 * The information returned after successfully creating a page.
 */
class CreatePageResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreatePageResponseData.attributeTypeMap;
    }
}
exports.CreatePageResponseData = CreatePageResponseData;
/**
 * @ignore
 */
CreatePageResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CreatePageResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreatePageResponseData.js.map