"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataDeletionRequestBodyData = void 0;
/**
 * Data needed to create a data deletion request.
 */
class CreateDataDeletionRequestBodyData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDataDeletionRequestBodyData.attributeTypeMap;
    }
}
exports.CreateDataDeletionRequestBodyData = CreateDataDeletionRequestBodyData;
/**
 * @ignore
 */
CreateDataDeletionRequestBodyData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateDataDeletionRequestBodyAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CreateDataDeletionRequestBodyDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDataDeletionRequestBodyData.js.map