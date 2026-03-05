"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookCellUpdateRequest = void 0;
/**
 * The description of a notebook cell update request.
 */
class NotebookCellUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookCellUpdateRequest.attributeTypeMap;
    }
}
exports.NotebookCellUpdateRequest = NotebookCellUpdateRequest;
/**
 * @ignore
 */
NotebookCellUpdateRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotebookCellUpdateRequestAttributes",
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
//# sourceMappingURL=NotebookCellUpdateRequest.js.map