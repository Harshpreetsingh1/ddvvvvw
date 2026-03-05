"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScatterplotTableRequest = void 0;
/**
 * Scatterplot request containing formulas and functions.
 */
class ScatterplotTableRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScatterplotTableRequest.attributeTypeMap;
    }
}
exports.ScatterplotTableRequest = ScatterplotTableRequest;
/**
 * @ignore
 */
ScatterplotTableRequest.attributeTypeMap = {
    formulas: {
        baseName: "formulas",
        type: "Array<ScatterplotWidgetFormula>",
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
//# sourceMappingURL=ScatterplotTableRequest.js.map