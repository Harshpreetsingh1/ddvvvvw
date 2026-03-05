"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebooksResponseData = void 0;
/**
 * The data for a notebook in get all response.
 */
class NotebooksResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebooksResponseData.attributeTypeMap;
    }
}
exports.NotebooksResponseData = NotebooksResponseData;
/**
 * @ignore
 */
NotebooksResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotebooksResponseDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "number",
        required: true,
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "NotebookResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebooksResponseData.js.map