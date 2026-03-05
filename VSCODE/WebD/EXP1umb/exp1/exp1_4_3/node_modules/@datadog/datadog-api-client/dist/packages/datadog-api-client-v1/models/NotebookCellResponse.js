"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookCellResponse = void 0;
/**
 * The description of a notebook cell response.
 */
class NotebookCellResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookCellResponse.attributeTypeMap;
    }
}
exports.NotebookCellResponse = NotebookCellResponse;
/**
 * @ignore
 */
NotebookCellResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotebookCellResponseAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotebookCellResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookCellResponse.js.map