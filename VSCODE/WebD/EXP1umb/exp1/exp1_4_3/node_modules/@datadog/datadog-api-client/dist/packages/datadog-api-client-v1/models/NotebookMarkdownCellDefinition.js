"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookMarkdownCellDefinition = void 0;
/**
 * Text in a notebook is formatted with [Markdown](https://daringfireball.net/projects/markdown/), which enables the use of headings, subheadings, links, images, lists, and code blocks.
 */
class NotebookMarkdownCellDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookMarkdownCellDefinition.attributeTypeMap;
    }
}
exports.NotebookMarkdownCellDefinition = NotebookMarkdownCellDefinition;
/**
 * @ignore
 */
NotebookMarkdownCellDefinition.attributeTypeMap = {
    text: {
        baseName: "text",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotebookMarkdownCellDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookMarkdownCellDefinition.js.map