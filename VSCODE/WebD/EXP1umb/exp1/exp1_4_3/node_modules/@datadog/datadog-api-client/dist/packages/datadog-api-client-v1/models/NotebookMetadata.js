"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookMetadata = void 0;
/**
 * Metadata associated with the notebook.
 */
class NotebookMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookMetadata.attributeTypeMap;
    }
}
exports.NotebookMetadata = NotebookMetadata;
/**
 * @ignore
 */
NotebookMetadata.attributeTypeMap = {
    isTemplate: {
        baseName: "is_template",
        type: "boolean",
    },
    takeSnapshots: {
        baseName: "take_snapshots",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "NotebookMetadataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookMetadata.js.map