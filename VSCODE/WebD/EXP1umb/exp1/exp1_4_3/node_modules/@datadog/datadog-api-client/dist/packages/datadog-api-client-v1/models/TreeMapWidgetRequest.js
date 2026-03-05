"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeMapWidgetRequest = void 0;
/**
 * An updated treemap widget.
 */
class TreeMapWidgetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TreeMapWidgetRequest.attributeTypeMap;
    }
}
exports.TreeMapWidgetRequest = TreeMapWidgetRequest;
/**
 * @ignore
 */
TreeMapWidgetRequest.attributeTypeMap = {
    formulas: {
        baseName: "formulas",
        type: "Array<WidgetFormula>",
    },
    q: {
        baseName: "q",
        type: "string",
    },
    queries: {
        baseName: "queries",
        type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    responseFormat: {
        baseName: "response_format",
        type: "FormulaAndFunctionResponseFormat",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TreeMapWidgetRequest.js.map