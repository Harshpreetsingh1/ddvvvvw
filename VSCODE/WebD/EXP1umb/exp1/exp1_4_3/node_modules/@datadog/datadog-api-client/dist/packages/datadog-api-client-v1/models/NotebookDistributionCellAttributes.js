"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookDistributionCellAttributes = void 0;
/**
 * The attributes of a notebook `distribution` cell.
 */
class NotebookDistributionCellAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookDistributionCellAttributes.attributeTypeMap;
    }
}
exports.NotebookDistributionCellAttributes = NotebookDistributionCellAttributes;
/**
 * @ignore
 */
NotebookDistributionCellAttributes.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "DistributionWidgetDefinition",
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
//# sourceMappingURL=NotebookDistributionCellAttributes.js.map