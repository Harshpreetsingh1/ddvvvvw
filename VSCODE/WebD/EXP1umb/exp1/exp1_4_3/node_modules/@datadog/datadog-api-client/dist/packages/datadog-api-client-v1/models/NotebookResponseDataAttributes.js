"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookResponseDataAttributes = void 0;
/**
 * The attributes of a notebook.
 */
class NotebookResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookResponseDataAttributes.attributeTypeMap;
    }
}
exports.NotebookResponseDataAttributes = NotebookResponseDataAttributes;
/**
 * @ignore
 */
NotebookResponseDataAttributes.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "NotebookAuthor",
    },
    cells: {
        baseName: "cells",
        type: "Array<NotebookCellResponse>",
        required: true,
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    metadata: {
        baseName: "metadata",
        type: "NotebookMetadata",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
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
//# sourceMappingURL=NotebookResponseDataAttributes.js.map