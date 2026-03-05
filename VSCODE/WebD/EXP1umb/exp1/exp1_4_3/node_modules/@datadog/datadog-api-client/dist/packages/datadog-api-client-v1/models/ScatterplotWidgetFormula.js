"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScatterplotWidgetFormula = void 0;
/**
 * Formula to be used in a Scatterplot widget query.
 */
class ScatterplotWidgetFormula {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScatterplotWidgetFormula.attributeTypeMap;
    }
}
exports.ScatterplotWidgetFormula = ScatterplotWidgetFormula;
/**
 * @ignore
 */
ScatterplotWidgetFormula.attributeTypeMap = {
    alias: {
        baseName: "alias",
        type: "string",
    },
    dimension: {
        baseName: "dimension",
        type: "ScatterplotDimension",
        required: true,
    },
    formula: {
        baseName: "formula",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScatterplotWidgetFormula.js.map