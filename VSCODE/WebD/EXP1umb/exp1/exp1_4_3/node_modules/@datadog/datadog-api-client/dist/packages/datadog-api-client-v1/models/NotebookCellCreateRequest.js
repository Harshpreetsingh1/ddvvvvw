"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookCellCreateRequest = void 0;
/**
 * The description of a notebook cell create request.
 */
class NotebookCellCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookCellCreateRequest.attributeTypeMap;
    }
}
exports.NotebookCellCreateRequest = NotebookCellCreateRequest;
/**
 * @ignore
 */
NotebookCellCreateRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotebookCellCreateRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotebookCellResourceType",
        required: true,
    },
};
//# sourceMappingURL=NotebookCellCreateRequest.js.map