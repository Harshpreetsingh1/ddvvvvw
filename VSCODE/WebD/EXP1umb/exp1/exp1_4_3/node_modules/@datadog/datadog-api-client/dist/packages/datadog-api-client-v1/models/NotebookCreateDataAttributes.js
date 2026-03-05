"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookCreateDataAttributes = void 0;
/**
 * The data attributes of a notebook.
 */
class NotebookCreateDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookCreateDataAttributes.attributeTypeMap;
    }
}
exports.NotebookCreateDataAttributes = NotebookCreateDataAttributes;
/**
 * @ignore
 */
NotebookCreateDataAttributes.attributeTypeMap = {
    cells: {
        baseName: "cells",
        type: "Array<NotebookCellCreateRequest>",
        required: true,
    },
    metadata: {
        baseName: "metadata",
        type: "NotebookMetadata",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    status: {
        baseName: "status",
        type: "NotebookStatus",
    },
    time: {
        baseName: "time",
        type: "NotebookGlobalTime",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookCreateDataAttributes.js.map