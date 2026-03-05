"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookTimeseriesCellAttributes = void 0;
/**
 * The attributes of a notebook `timeseries` cell.
 */
class NotebookTimeseriesCellAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookTimeseriesCellAttributes.attributeTypeMap;
    }
}
exports.NotebookTimeseriesCellAttributes = NotebookTimeseriesCellAttributes;
/**
 * @ignore
 */
NotebookTimeseriesCellAttributes.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "TimeseriesWidgetDefinition",
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
//# sourceMappingURL=NotebookTimeseriesCellAttributes.js.map