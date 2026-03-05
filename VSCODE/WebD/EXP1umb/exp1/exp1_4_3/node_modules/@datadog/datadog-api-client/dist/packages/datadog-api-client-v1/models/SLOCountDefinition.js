"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOCountDefinition = void 0;
/**
 * A count-based (metric) SLI specification, composed of three parts: the good events formula, the total events formula,
 * and the underlying queries.
 */
class SLOCountDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOCountDefinition.attributeTypeMap;
    }
}
exports.SLOCountDefinition = SLOCountDefinition;
/**
 * @ignore
 */
SLOCountDefinition.attributeTypeMap = {
    goodEventsFormula: {
        baseName: "good_events_formula",
        type: "SLOFormula",
        required: true,
    },
    queries: {
        baseName: "queries",
        type: "Array<SLODataSourceQueryDefinition>",
        required: true,
    },
    totalEventsFormula: {
        baseName: "total_events_formula",
        type: "SLOFormula",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOCountDefinition.js.map