"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SLOTimeSliceQuery = void 0;
/**
 * The queries and formula used to calculate the SLI value.
 */
class SLOTimeSliceQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SLOTimeSliceQuery.attributeTypeMap;
    }
}
exports.SLOTimeSliceQuery = SLOTimeSliceQuery;
/**
 * @ignore
 */
SLOTimeSliceQuery.attributeTypeMap = {
    formulas: {
        baseName: "formulas",
        type: "[SLOFormula]",
        required: true,
    },
    queries: {
        baseName: "queries",
        type: "Array<SLODataSourceQueryDefinition>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SLOTimeSliceQuery.js.map