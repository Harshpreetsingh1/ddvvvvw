"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookLogStreamCellAttributes = void 0;
/**
 * The attributes of a notebook `log_stream` cell.
 */
class NotebookLogStreamCellAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookLogStreamCellAttributes.attributeTypeMap;
    }
}
exports.NotebookLogStreamCellAttributes = NotebookLogStreamCellAttributes;
/**
 * @ignore
 */
NotebookLogStreamCellAttributes.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "LogStreamWidgetDefinition",
        required: true,
    },
    graphSize: {
        baseName: "graph_size",
        type: "NotebookGraphSize",
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
//# sourceMappingURL=NotebookLogStreamCellAttributes.js.map