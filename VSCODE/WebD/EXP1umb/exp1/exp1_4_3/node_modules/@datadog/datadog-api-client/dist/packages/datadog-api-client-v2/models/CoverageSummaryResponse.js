"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageSummaryResponse = void 0;
/**
 * Response object containing code coverage summary.
 */
class CoverageSummaryResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CoverageSummaryResponse.attributeTypeMap;
    }
}
exports.CoverageSummaryResponse = CoverageSummaryResponse;
/**
 * @ignore
 */
CoverageSummaryResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CoverageSummaryData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CoverageSummaryResponse.js.map