"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookHeatMapCellAttributes = void 0;
/**
 * The attributes of a notebook `heatmap` cell.
 */
class NotebookHeatMapCellAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookHeatMapCellAttributes.attributeTypeMap;
    }
}
exports.NotebookHeatMapCellAttributes = NotebookHeatMapCellAttributes;
/**
 * @ignore
 */
NotebookHeatMapCellAttributes.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "HeatMapWidgetDefinition",
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
//# sourceMappingURL=NotebookHeatMapCellAttributes.js.map