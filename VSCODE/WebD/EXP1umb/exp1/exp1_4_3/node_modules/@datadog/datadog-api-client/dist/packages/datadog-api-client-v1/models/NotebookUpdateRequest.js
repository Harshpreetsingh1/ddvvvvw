"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookUpdateRequest = void 0;
/**
 * The description of a notebook update request.
 */
class NotebookUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookUpdateRequest.attributeTypeMap;
    }
}
exports.NotebookUpdateRequest = NotebookUpdateRequest;
/**
 * @ignore
 */
NotebookUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "NotebookUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookUpdateRequest.js.map