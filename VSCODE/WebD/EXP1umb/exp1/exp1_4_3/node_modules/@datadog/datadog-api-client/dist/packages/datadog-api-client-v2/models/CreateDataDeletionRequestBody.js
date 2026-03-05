"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataDeletionRequestBody = void 0;
/**
 * Object needed to create a data deletion request.
 */
class CreateDataDeletionRequestBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDataDeletionRequestBody.attributeTypeMap;
    }
}
exports.CreateDataDeletionRequestBody = CreateDataDeletionRequestBody;
/**
 * @ignore
 */
CreateDataDeletionRequestBody.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateDataDeletionRequestBodyData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDataDeletionRequestBody.js.map