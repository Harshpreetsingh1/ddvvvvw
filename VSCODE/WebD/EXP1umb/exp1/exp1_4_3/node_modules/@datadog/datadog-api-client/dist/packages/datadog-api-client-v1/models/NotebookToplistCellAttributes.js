"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookToplistCellAttributes = void 0;
/**
 * The attributes of a notebook `toplist` cell.
 */
class NotebookToplistCellAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookToplistCellAttributes.attributeTypeMap;
    }
}
exports.NotebookToplistCellAttributes = NotebookToplistCellAttributes;
/**
 * @ignore
 */
NotebookToplistCellAttributes.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "ToplistWidgetDefinition",
        required: true,
    },
    graphSize: {
        baseName: "graph_size",
        type: "NotebookGraphSize",
    },
    splitBy: {
        baseName: "split_by",
        type: "NotebookSplitBy",
    },
    time: {
        baseName: "time",
        type: "NotebookCellTime",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookToplistCellAttributes.js.map