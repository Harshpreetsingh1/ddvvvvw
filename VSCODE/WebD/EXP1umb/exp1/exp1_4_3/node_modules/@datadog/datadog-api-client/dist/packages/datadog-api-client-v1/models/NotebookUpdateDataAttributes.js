"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookUpdateDataAttributes = void 0;
/**
 * The data attributes of a notebook.
 */
class NotebookUpdateDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookUpdateDataAttributes.attributeTypeMap;
    }
}
exports.NotebookUpdateDataAttributes = NotebookUpdateDataAttributes;
/**
 * @ignore
 */
NotebookUpdateDataAttributes.attributeTypeMap = {
    cells: {
        baseName: "cells",
        type: "Array<NotebookUpdateCell>",
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
//# sourceMappingURL=NotebookUpdateDataAttributes.js.map