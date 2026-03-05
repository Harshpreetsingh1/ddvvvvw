"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookResponseData = void 0;
/**
 * The data for a notebook.
 */
class NotebookResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookResponseData.attributeTypeMap;
    }
}
exports.NotebookResponseData = NotebookResponseData;
/**
 * @ignore
 */
NotebookResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotebookResponseDataAttributes",
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
//# sourceMappingURL=NotebookResponseData.js.map