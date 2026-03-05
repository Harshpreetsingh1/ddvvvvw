"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableRequest = void 0;
/**
 * Request body for creating a new reference table from a local file or cloud storage.
 */
class CreateTableRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateTableRequest.attributeTypeMap;
    }
}
exports.CreateTableRequest = CreateTableRequest;
/**
 * @ignore
 */
CreateTableRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateTableRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateTableRequest.js.map