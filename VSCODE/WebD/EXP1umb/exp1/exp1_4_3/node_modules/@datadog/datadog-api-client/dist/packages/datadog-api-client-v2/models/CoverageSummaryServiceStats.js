"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoverageSummaryServiceStats = void 0;
/**
 * Coverage statistics for a specific service.
 */
class CoverageSummaryServiceStats {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CoverageSummaryServiceStats.attributeTypeMap;
    }
}
exports.CoverageSummaryServiceStats = CoverageSummaryServiceStats;
/**
 * @ignore
 */
CoverageSummaryServiceStats.attributeTypeMap = {
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
//# sourceMappingURL=CoverageSummaryServiceStats.js.map