"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageSummaryAttributes = void 0;
/**
 * Attributes object for code coverage summary response.
 */
class CoverageSummaryAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CoverageSummaryAttributes.attributeTypeMap;
    }
}
exports.CoverageSummaryAttributes = CoverageSummaryAttributes;
/**
 * @ignore
 */
CoverageSummaryAttributes.attributeTypeMap = {
    codeowners: {
        baseName: "codeowners",
        type: "{ [key: string]: CoverageSummaryCodeownerStats; }",
    },
    evaluatedFlagsCount: {
        baseName: "evaluated_flags_count",
        type: "number",
        format: "int64",
    },
    evaluatedReportsCount: {
        baseName: "evaluated_reports_count",
        type: "number",
        format: "int64",
    },
    patchCoverage: {
        baseName: "patch_coverage",
        type: "number",
        format: "double",
    },
    services: {
        baseName: "services",
        type: "{ [key: string]: CoverageSummaryServiceStats; }",
    },
    totalCoverage: {
        baseName: "total_coverage",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CoverageSummaryAttributes.js.map