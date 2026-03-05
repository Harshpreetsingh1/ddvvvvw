"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageSummaryData = void 0;
/**
 * Data object for coverage summary response.
 */
class CoverageSummaryData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CoverageSummaryData.attributeTypeMap;
    }
}
exports.CoverageSummaryData = CoverageSummaryData;
/**
 * @ignore
 */
CoverageSummaryData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CoverageSummaryAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CoverageSummaryType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CoverageSummaryData.js.map