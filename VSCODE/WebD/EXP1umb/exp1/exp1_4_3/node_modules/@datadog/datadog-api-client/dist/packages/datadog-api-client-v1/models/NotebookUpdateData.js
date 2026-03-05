"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookUpdateData = void 0;
/**
 * The data for a notebook update request.
 */
class NotebookUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookUpdateData.attributeTypeMap;
    }
}
exports.NotebookUpdateData = NotebookUpdateData;
/**
 * @ignore
 */
NotebookUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotebookUpdateDataAttributes",
        required: true,
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
//# sourceMappingURL=NotebookUpdateData.js.map