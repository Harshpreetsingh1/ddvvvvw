"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebooksResponseDataAttributes = void 0;
/**
 * The attributes of a notebook in get all response.
 */
class NotebooksResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebooksResponseDataAttributes.attributeTypeMap;
    }
}
exports.NotebooksResponseDataAttributes = NotebooksResponseDataAttributes;
/**
 * @ignore
 */
NotebooksResponseDataAttributes.attributeTypeMap = {
    author: {
        baseName: "author",
        type: "NotebookAuthor",
    },
    cells: {
        baseName: "cells",
        type: "Array<NotebookCellResponse>",
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
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebooksResponseDataAttributes.js.map