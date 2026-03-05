"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScatterPlotWidgetDefinitionRequests = void 0;
/**
 * Widget definition.
 */
class ScatterPlotWidgetDefinitionRequests {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScatterPlotWidgetDefinitionRequests.attributeTypeMap;
    }
}
exports.ScatterPlotWidgetDefinitionRequests = ScatterPlotWidgetDefinitionRequests;
/**
 * @ignore
 */
ScatterPlotWidgetDefinitionRequests.attributeTypeMap = {
    table: {
        baseName: "table",
        type: "ScatterplotTableRequest",
    },
    x: {
        baseName: "x",
        type: "ScatterPlotRequest",
    },
    y: {
        baseName: "y",
        type: "ScatterPlotRequest",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScatterPlotWidgetDefinitionRequests.js.map