"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDataDeletionResponseBody = void 0;
/**
 * The response from the create data deletion request endpoint.
 */
class CreateDataDeletionResponseBody {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateDataDeletionResponseBody.attributeTypeMap;
    }
}
exports.CreateDataDeletionResponseBody = CreateDataDeletionResponseBody;
/**
 * @ignore
 */
CreateDataDeletionResponseBody.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DataDeletionResponseItem",
    },
    meta: {
        baseName: "meta",
        type: "DataDeletionResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateDataDeletionResponseBody.js.map