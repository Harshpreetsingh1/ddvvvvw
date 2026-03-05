"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookMarkdownCellAttributes = void 0;
/**
 * The attributes of a notebook `markdown` cell.
 */
class NotebookMarkdownCellAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookMarkdownCellAttributes.attributeTypeMap;
    }
}
exports.NotebookMarkdownCellAttributes = NotebookMarkdownCellAttributes;
/**
 * @ignore
 */
NotebookMarkdownCellAttributes.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "NotebookMarkdownCellDefinition",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookMarkdownCellAttributes.js.map